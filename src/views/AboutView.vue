<script setup lang="ts">
import BoardItem from '../components/BoardItem.vue'
</script>
<template>
  <div class="about">
    <BoardItem>
      <template #icon> </template>
      <template #heading>vue3 web app</template>
    </BoardItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
