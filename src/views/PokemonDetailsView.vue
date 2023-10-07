<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export interface Ability {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

const route = useRoute()
const abilities: Ref<Ability[]> = ref([])

const fetchPokemon = (id: string) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => {
    abilities.value = response.data.abilities
  })
}

onMounted(() => fetchPokemon(route.params.id as string))
</script>

<template>
  <div class="pokemon">
    <div v-if="abilities" class="content">
      <h2>Abilities</h2>
      <div v-for="(ability, index) in abilities" :key="index">
        {{ ability.ability.name }}
      </div>
    </div>
  </div>
</template>
<style></style>
