<template>
	<div class="container">
		<new-created-quote @quoteAdded="newQuote"></new-created-quote>
		<app-quote-grid :quotes="quotes"></app-quote-grid>
	</div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
export default {
	data (){
		return{
			quotes: ['Just a quote to see something'],
			maxQuotes: 10
		}
	},
	methods:{
		newQuote(quote){
			this.quotes.push(quote);
		}
	},
	components:{
		appQuoteGrid: QuoteGrid,
		newCreatedQuote: NewQuote
	}

}
</script>

<style>
</style>
