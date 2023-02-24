<template>
  <div>
    <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
      Technical Skills
    </h1>
    <div
      class="mt-10 flex gap-12 justify-center flex-col sm:flex-row sm:gap-16"
    >
      <div class="flex flex-col gap-2 place-items-center sm:relative">
        <font-awesome-icon icon="fa-solid fa-database" class="text-6xl" />
        <button
          @click="handleSelection"
          id="database"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          :style="[
            selected === 'database'
              ? { background: 'black', color: 'white' }
              : null,
          ]"
        >
          Database
        </button>
        <Transition name="slide-fade">
          <Database v-if="selected === 'database'" class="sm:hidden" />
        </Transition>
      </div>
      <div class="flex flex-col gap-2 place-items-center">
        <font-awesome-icon icon="fa-solid fa-server" class="text-6xl" />
        <button
          @click="handleSelection"
          id="backEnd"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32"
          :style="[
            selected === 'backEnd'
              ? { background: 'black', color: 'white' }
              : null,
          ]"
        >
          Back-End
        </button>
        <Transition name="slide-fade">
          <BackEnd v-if="selected === 'backEnd'" class="sm:hidden" />
        </Transition>
      </div>
      <div class="flex flex-col gap-2 place-items-center">
        <font-awesome-icon icon="fa-brands fa-chrome" class="text-6xl" />
        <button
          @click="handleSelection"
          id="frontEnd"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-32"
          :style="[
            selected === 'frontEnd'
              ? { background: 'black', color: 'white' }
              : null,
          ]"
        >
          Front-End
        </button>
        <Transition name="slide-fade">
          <FrontEnd v-if="selected === 'frontEnd'" class="sm:hidden" />
        </Transition>
      </div>
    </div>
    <div class="relative">
      <Transition name="slide-fade">
        <Database
          v-show="selected === 'database'"
          class="hidden md:block absolute top-0 w-full"
        />
      </Transition>

      <Transition name="slide-fade">
        <BackEnd
          v-show="selected === 'backEnd'"
          class="hidden md:block absolute top-0 w-full"
        />
      </Transition>

      <Transition name="slide-fade">
        <FrontEnd
          v-show="selected === 'frontEnd'"
          class="hidden md:block absolute top-0 w-full"
        />
      </Transition>
    </div>
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
