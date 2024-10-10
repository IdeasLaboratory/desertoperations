<script setup></script>

<template>
  <div
    class="abs-bottom bg-secondary text-center d-flex flex-column bottom-width bottom-height pa-3 border-md"
  >
    <h2>Recettes & dépenses</h2>
    <div class="pt-0">- Gains toutes les 10 minutes -</div>
  </div>
</template>

<style scoped>
.abs-bottom {
  position: absolute;
  bottom: 0;
}
.bottom-width {
  width: calc(100vw - 500px);
}
.bottom-height {
  height: 250px;
  overflow: scroll;
}
</style>
