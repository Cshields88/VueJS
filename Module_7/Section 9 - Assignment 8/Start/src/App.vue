<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="switchComponent = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="switchComponent = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="switchComponent = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="switchComponent">
                    <slot></slot>                    
                </component>   
               <!--  <app-blue>
                    <h2>This is the Heading</h2>
                    <p>This is the content</p>
                </app-blue>
                <app-green>
                    <h2>This is the Heading</h2>
                    <p>This is the content</p>
                </app-green>
                <app-red>
                    <h2>This is the Heading</h2>
                    <p>This is the content</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {

    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    }
}
</script>

<style>
</style>
