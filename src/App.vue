<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="d-flex flex-column ga-2">
    <div class="d-flex flex-row ga-2 pa-2 header">
      <RouterLink to="/vuetify-default">Vuetify default login</RouterLink>
      <RouterLink to="/vuetify-overridden">Vuetify overridden login</RouterLink>
      <RouterLink to="/native">Raw HTML login</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
div.header {
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}
</style>
