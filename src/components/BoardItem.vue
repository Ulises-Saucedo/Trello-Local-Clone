<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { updateTask, deleteTask } from "../libs/board.lib";

const name = ref("");
const props = defineProps(["task", "index"]);
const isOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isOpen.value = false));

const handleUpdateTask = (id) => {
  updateTask(name.value, props.index, id);
  isOpen.value = false;
  name.value = "";
};
</script>

<template>
  <div class="cursor-move rounded py-1 px-3 bg-gray-500">
    <div class="flex w-full justify-between">
      {{ task.name }}
      <div class="flex gap-x-2">
        <button @click="isOpen = true" class="text-slate-900">*</button>
        <button @click="deleteTask(index, task.id)" class="text-slate-900">
          -
        </button>
      </div>
    </div>
  </div>
  <div
    ref="modal"
    v-if="isOpen"
    class="w-[150px] sm:w-[350px] p-3 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <input
      type="text"
      class="w-full py-1 px-3 rounded bg-gray-300 my-1 text-black"
      placeholder="Update task name"
      v-model="name"
    />
    <button
      class="w-full py-1 px-3 rounded bg-gray-300 my-1 hover:bg-gray-400 ease-in duration-200 text-black"
      @click="handleUpdateTask(task.id)"
    >
      Update task
    </button>
  </div>
</template>
