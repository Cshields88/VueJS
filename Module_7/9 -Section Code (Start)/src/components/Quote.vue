<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span style="color: #ccc"><slot name="subtitle">Subtitle</slot></span>
		</div>
		<hr>
		<div>
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script>

</script>
<style scoped>
div{
	border: 1px solid #ccc;
	box-shadow: 1px 1px 2px black;
	padding: 30px;
	margin: 30px auto;
	text-align: center;
}
.title{
	font-style: italic;
	color: red;
}

</style>