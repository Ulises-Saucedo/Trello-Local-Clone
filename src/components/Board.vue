<script setup>
import { Board } from "../store/board.store";
import { VueDraggable } from "vue-draggable-plus";
import BoardCard from "./BoardCard.vue";
</script>

<template>
  <div class="flex">
    <VueDraggable
      class="flex cursor-move"
      animation="150"
      group="container"
      ghostClass="container"
      easing
    >
      <BoardCard
        v-for="(board, index) in Board"
        :board="board"
        :index="index"
      />
    </VueDraggable>
  </div>
</template>
