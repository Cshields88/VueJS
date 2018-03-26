<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
               
                <hr>
                <router-view name="header-top"></router-view>
               <transition name="fade" mode="out-in">
                <router-view></router-view>
               </transition>
                <router-view name="header-bottom"></router-view> <!-- where the routes are loaded -->
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.75;
}
</style>
