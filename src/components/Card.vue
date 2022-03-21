<template>
    <div class="col-3 border border-primary overflow-hidden p-4 m-2">
      <a v-if:="!!deleteButton" class="btn border" v-on:click="deleteCard(pokemon)">Delete</a>
      <img class="card-image p-4 img-fluid border border-light rounded" :src="pokemon.sprites.other.dream_world.front_default" />
      <h2 class="card-title h2 text-center border-light border">{{pokemon.forms[0].name}}</h2>
      <p v-for:="types in pokemon.types" class="card-subtitle">{{types.type.name}}</p>
  </div>
</template>

<script >
import LocalStorage from '@/classes/LocalStorage.js'
import configs from '@/configs/configs'

export default{
    props:{
            pokemon:{
            type: Object,
            required: true
        },
        deleteButton:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods:{
        deleteCard(name){
            this.$emit('pokemonId', name)
        }
    }
}
</script>

<style scoped>

</style>