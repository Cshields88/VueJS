<!-- Vue live-secomponent -->
<template>
	<div class="form__field">
		<div class="form__label">
			<strong>Please choose a color:</strong>
		</div>
		<div class="form__input">
			<swatches v-model="color" popover-to="left"></swatches>
		</div>
	</div>
</template>

<script>
import Swatches from 'vue-swatches'

  // Import the styles too, globally
  import "vue-swatches/dist/vue-swatches.min.css"

  export default {
    components: { Swatches }, // window.VueSwatches.default - from CDN
    data () {
    	return {
    		color: '#1CA085'
    	}
    }
}
</script>

<style>

</style>
