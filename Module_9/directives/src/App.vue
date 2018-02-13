<template>
  <div>
    <h1>Built-In Components</h1>
    <p v-text="'This is some text'"></p>
    <p v-html="'<strong>This is some bold text</strong>'"></p>
    <hr>
    <h1>Custom Components</h1>
    <p v-highlight="'purple'">hello</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
