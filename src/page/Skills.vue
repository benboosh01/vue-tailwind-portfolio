<template>
  <div>
    <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
      Technical Skills
    </h1>
    <div class="mt-10 flex gap-12 justify-center">
      <div class="flex flex-col gap-2">
        <font-awesome-icon icon="fa-solid fa-database" class="text-6xl" />
        <button
          @click="handleSelection"
          id="database"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          :style="[selected === 'database' ? { background: 'yellow' } : null]"
        >
          Database
        </button>
      </div>
      <div class="flex flex-col gap-2">
        <font-awesome-icon icon="fa-solid fa-server" class="text-6xl" />
        <button
          @click="handleSelection"
          id="backEnd"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32"
          :style="[selected === 'backEnd' ? { background: 'yellow' } : null]"
        >
          Back-End
        </button>
      </div>
      <div class="flex flex-col gap-2">
        <font-awesome-icon icon="fa-brands fa-chrome" class="text-6xl" />
        <button
          @click="handleSelection"
          id="frontEnd"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32"
          :style="[selected === 'frontEnd' ? { background: 'yellow' } : null]"
        >
          Front-End
        </button>
      </div>
    </div>
    <Database v-if="selected === 'database'" />
    <BackEnd v-if="selected === 'backEnd'" />
    <FrontEnd v-if="selected === 'frontEnd'" />
  </div>
</template>

<script setup>
import BackEnd from "../components/BackEnd.vue";
import FrontEnd from "../components/FrontEnd.vue";
import Database from "../components/Database.vue";
import { ref } from "vue";

const selected = ref("");

const handleSelection = (event) => {
  if (selected.value === event.target.id) {
    selected.value = "";
  } else {
    selected.value = event.target.id;
  }
};
</script>
