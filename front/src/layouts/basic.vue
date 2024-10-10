<script setup>
import Top from "../components/top.vue";
import Right from "../components/right.vue";
import Bottom from "../components/bottom.vue";
import Secondtop from "../components/secondtop.vue";
</script>

<template>
  <div>
    <Top />
    <div class="d-flex justify-space-between">
      <div class="custom-width">
        <Secondtop />
        <router-view />
      </div>
      <Right />
    </div>
    <Bottom />
  </div>
</template>

<style scoped>
.custom-width {
  width: calc(100vw - 500px);
}
</style>
