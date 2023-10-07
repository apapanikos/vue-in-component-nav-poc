<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import PokemonList from '@/components/PokemonList.vue'
import PokemonCard from '@/components/PokemonCard.vue'

const pokemons = ref([])

const props = defineProps<{ inWidget: boolean }>()

const fetchPokemon = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon?offset=0').then((response) => {
    pokemons.value = response.data.results
  })
}

onMounted(() => fetchPokemon())
</script>

<template>
  <main>
    <PokemonList>
      <PokemonCard
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :name="pokemon.name"
        :url="pokemon.url"
        :in-widget="props.inWidget"
      ></PokemonCard>
    </PokemonList>
  </main>
</template>
