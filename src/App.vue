<template>
  <Nav />
  <main class="grid justify-items-center">
    <div
      class="text-center shadow-2xl rounded border-solid p-20 mt-36 grid place-items-center md:w-[768px] md:h-[468px] bg-white"
    >
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>

<style scoped></style>
