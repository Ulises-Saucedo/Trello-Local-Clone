<script setup>
import { ref } from "vue";
import BoardItem from "./BoardItem.vue";
import { onClickOutside } from "@vueuse/core";
import { deleteColumn, addTask } from "../libs/board.lib";
import { VueDraggable } from "vue-draggable-plus";

const name = ref("");
const props = defineProps(["board", "index"]);
const isOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isOpen.value = false));

const handleAddTask = () => {
  addTask(name.value, props.index);
  isOpen.value = false;
  name.value = "";
};
</script>

<template>
  <section
    class="w-[250px] min-h-[320px] bg-zinc-700 mx-2 my-4 p-2 rounded text-white"
  >
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-medium">{{ board.name }}</h2>
      <div class="flex gap-x-2">
        <button class="py-1 px-2 bg-gray-500 rounded" @click="isOpen = true">
          +
        </button>
        <button
          class="py-1 px-2 bg-gray-500 rounded"
          @click="deleteColumn(board.id)"
        >
          -
        </button>
      </div>
    </div>
    <VueDraggable
      class="flex flex-col gap-2 min-h-[150px]"
      v-model="board.tasks"
      animation="150"
      easing
      group="people"
      ghostClass="ghost"
    >
      <BoardItem
        v-for="task in board.tasks"
        :task="task"
        :index="index"
        :key="task.id"
      />
    </VueDraggable>
  </section>
  <div
    ref="modal"
    v-if="isOpen"
    class="w-[150px] sm:w-[350px] p-3 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <input
      type="text"
      class="w-full py-1 px-3 rounded bg-gray-300 my-1"
      placeholder="Task name"
      v-model="name"
    />
    <button
      class="w-full py-1 px-3 rounded bg-gray-300 my-1 hover:bg-gray-400 ease-in duration-200"
      @click="handleAddTask"
    >
      Add task
    </button>
  </div>
</template>
