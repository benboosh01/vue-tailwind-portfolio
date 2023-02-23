<template>
  <nav
    class="z-10 flex justify-center py-8 absolute top-20 left-0 right-0 bottom-0 bg-slate-100"
  >
    <div class="flex gap-8 flex-col text-3xl text-center w-11/12">
      <router-link
        class="bg-slate-300 py-4 rounded"
        to="/"
        @click="$emit('toggleNav')"
        >Home</router-link
      >
      <router-link
        class="bg-slate-300 py-4 rounded"
        to="/skills"
        @click="$emit('toggleNav')"
        >Technical Skills</router-link
      >
      <router-link
        class="bg-slate-300 py-4 rounded"
        to="/portfolio"
        @click="$emit('toggleNav')"
        >Portfolio</router-link
      >
      <router-link
        class="bg-slate-300 py-4 rounded"
        to="/contact"
        @click="$emit('toggleNav')"
        >Contact</router-link
      >
    </div>
  </nav>
</template>

<script setup></script>
