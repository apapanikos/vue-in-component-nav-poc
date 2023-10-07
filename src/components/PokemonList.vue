<script setup lang="ts"></script>

<template>
  <div class="pokemon-list">
    <slot />
  </div>
</template>
<style>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 1rem;
}
</style>
