<script setup>
import Top from "../components/top.vue";
import Right from "../components/right.vue";
import Bottom from "../components/bottom.vue";
</script>

<template>
  <div>
    <Top />
    <div class="d-flex justify-space-between">
      <router-view />
      <Right />
    </div>
    <Bottom />
  </div>
</template>

<style scoped></style>
