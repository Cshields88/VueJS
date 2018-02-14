<template>
  <div>
    <h1>Built-In Components</h1>
    <p v-text="'This is some text'"></p>
    <p v-html="'<strong>This is some bold text</strong>'"></p>
    <hr>
    <h1>Custom Components</h1>
    <p v-highlight:background.delayed="'purple'">hello</p>
    <p v-local-highlight:background.delayed.blink="'green'">hello</p>
  </div>
</template>

<script>
export default {
  directives: { //Registers local directive
    'local-highlight': {
      bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    if(binding.modifiers['blink']){
      let mainColor = binding.value;
      let secondColor = 'blue';
      let currentColor = mainColor;
      setTimeout(() => {
        setInterval(() => {
          currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
          if(binding.arg == 'background'){
            el.style.backgroundColor = currentColor;
          }else{
            el.style.color = currentColor;
          }
        },1000);

      }, delay)
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay)
    
  }
}
}
}
</script>

<style>

</style>
