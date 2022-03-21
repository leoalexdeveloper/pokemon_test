<script setup>
import Navbar from '@/components/Navbar.vue'
import LocalStorage from '@/classes/LocalStorage.js'
import configs from '@/configs/configs.js'
import Axios from '@/classes/Axios.js'

  (async function getPokemons(){
    const pokemons = []
    for(let i = 1; i <= configs.pokemons.limit; i++){
      await Axios.getPokemon(i).then(res => pokemons.push(res))
    }
    await LocalStorage.set(configs.localstorage.pokemonList, pokemons)
  })()
  
</script>

<template>
  <div>
    <Navbar />
    
    <router-view></router-view>
  </div>
</template>

<style>

</style>
