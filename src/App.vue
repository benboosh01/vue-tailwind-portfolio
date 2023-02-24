<template>
  <button
    to="/nav"
    @click="toggleNav"
    class="absolute top-5 right-12 text-4xl text-white"
  >
    <font-awesome-icon icon="fa-solid fa-bars" />
  </button>
  <div class="h-20 bg-slate-600"></div>

  <Transition name="slide-fade-nav">
    <Nav v-if="showNav" @toggleNav="toggleNav" />
  </Transition>

  <main class="grid justify-items-center bg-slate-100 h-full">
    <div class="text-center p-20 mt-15 grid container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { ref } from "vue";

let showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};
</script>

<style>
@import "./style.css";
</style>
