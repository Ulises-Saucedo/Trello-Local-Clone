<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { addColumn } from "../libs/board.lib";

const column = ref("");
const isOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isOpen.value = false));

const handleAddColumn = () => {
  addColumn(column.value);
  isOpen.value = false;
  column.value = "";
};
</script>

<template>
  <header
    class="h-[50px] w-full bg-zinc-700 flex items-center justify-between px-3 py-1 text-white font-medium"
  >
    <h1 class="text-xl">Trello clone</h1>
    <div class="flex gap-x-2 items-center">
      <button
        class="text-md py-1 px-3 shadow-inner rounded bg-zinc-600 hover:bg-zinc-500 ease-in-out duration-300"
        @click="isOpen = true"
      >
        Add column
      </button>
    </div>
  </header>
  <div
    ref="modal"
    v-if="isOpen"
    class="w-[150px] sm:w-[350px] p-3 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <input
      type="text"
      class="w-full py-1 px-3 rounded bg-gray-300 my-1"
      placeholder="Column name"
      v-model="column"
    />
    <button
      class="w-full py-1 px-3 rounded bg-gray-300 my-1 hover:bg-gray-400 ease-in duration-200"
      @click="handleAddColumn"
    >
      Add column
    </button>
  </div>
</template>
