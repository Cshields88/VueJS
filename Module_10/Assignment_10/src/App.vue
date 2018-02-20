<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Exercise 1</h2>
                <p class="original">Original Text: {{text}}</p>
                <p class="reversed">Reversed Text: {{text | reverseText}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Exercise 2</h2>
                <p class="global">{{"Christopher" | string-length}}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Exercise 3</h2>
                <p>{{reverseText}}</p>
                <p>{{nameLength}}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                 <h2>Exercise 4</h2>
                <p class="global">{{"Christopher" | string-length}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {lengthMixin} from './lengthMixin';

    export default {
        data(){
            return{
                text: "Hello World",
                name: "Christopher"
            }
        },
        mixins: [lengthMixin],
        filters: {
             reverseText(value){
                return value.split("").reverse().join("");
            }
        },
        computed:{
             reverseText(){
                return this.text.split("").reverse().join("");
            }
            // ,
            // nameLength(){
            //     return this.name + ' (' + this.name.length + ')';
            // }
        }
    }
</script>

<style>
h1, p, h2{
    padding: 10px;
    text-align: center;
}
.original{
    color: white;
    background-color: darkblue;
}
.reversed{
    color: white;
    background-color: black;
}
.global{
    color: black;
    background-color: crimson
}
</style>
