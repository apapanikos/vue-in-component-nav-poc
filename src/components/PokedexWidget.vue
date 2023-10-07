<script setup lang="ts">
import { inject } from 'vue'

const routes = inject('routes')
</script>
<template>
  <div class="widget">
    <component :is="routes[0].component" v-bind="routes[0].props"></component>
  </div>
</template>

<style>
.widget {
  position: fixed;
  border-radius: 0.5rem;
  height: 100%;
  width: 400px;
  right: 2vw;
  bottom: 0;
  background-color: #35495e;
}
</style>
