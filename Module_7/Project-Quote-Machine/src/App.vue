<template>
	<div class="container">
		<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
		<new-created-quote @quoteAdded="newQuote"></new-created-quote>
		<app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">
					Info: Cick Quote To Delete
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';
export default {
	data (){
		return{
			quotes: ['Just a quote to see something'],
			maxQuotes: 10
		}
	},
	methods:{
		newQuote(quote){
			if(this.quotes.length >= this.maxQuotes){
				return alert('Please Remove Quotes First');
			}

			this.quotes.push(quote);
		},
		deleteQuote(index){
			this.quotes.splice(index, 1);
		}
	},
	components:{
		appQuoteGrid: QuoteGrid,
		newCreatedQuote: NewQuote,
		appHeader: Header
	}

}
</script>

<style>
</style>
