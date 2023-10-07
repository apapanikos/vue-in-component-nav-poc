import PokedexViewVue from './views/PokedexView.vue'

export const widgetRoutes = [
  {
    name: '/pokedex',
    component: PokedexViewVue,
    props: { inWidget: true }
  }
]
