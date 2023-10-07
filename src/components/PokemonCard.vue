<script setup lang="ts">
import { computed, ref } from 'vue'

export interface PokemonProps {
  name?: string
  url?: string
  inWidget?: boolean
}
const props = withDefaults(defineProps<PokemonProps>(), {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  inWidget: false
})
const id = props.url.split('')[props.url.length - 2]
const routerLinkProps = ref({
  to: { name: 'pokemon', params: { id } }
})
const routeNavProps = ref(!props.inWidget ? routerLinkProps : {})

const routeNavComponent = computed(() => (!props.inWidget ? 'router-link' : 'WidgetNavLink'))
</script>

<template>
  <div class="pokemon-card">
    <component :is="routeNavComponent" v-bind="routeNavProps">{{ props.name }} </component>
  </div>
</template>
<style>
.pokemon-card {
  border-radius: 0.5rem;
  border: 1px solid #35495e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-card:hover {
  cursor: pointer;
  background-color: #41b88338;
  border: none;
}

.pokemon-card a {
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: 0.75rem;
}

.pokemon-card:hover a {
  color: #35495e;
}
</style>
