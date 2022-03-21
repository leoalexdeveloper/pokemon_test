<template>
    <section class="create-container container-fluid">
        <div class="slot-container 
                    container-fluid 
                    addPokeComponent 
                    d-flex
                    flex-row
                    
                    justify-content-evenly
                    mt-5">
           <Card v-for:="pokemon in selectedPokemons" 
                    :pokemon="pokemon" 
                    :deleteButton="true"
                    v-on:pokemonId="deletePokemons"/>
        </div>
        <div class="pokemonList
                    border
                    m-auto
                    d-flex
                    flex-wrap
                    justify-content-around">

            <Card v-on:click="clickOnCard(index), hiddenCards" 
                  class="card-select" 
                  v-for:="(pokemon, index) in pokemonView" 
                  :key="pokemon.id" 
                  :pokemon="pokemon"
                  :deleteButton="false" />

        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </section>
</template>

<script >
import LocalStorage from '@/classes/LocalStorage.js'
import configs from '@/configs/configs.js'
import Card from '@/components/Card.vue'

export default{
    components:{Card},
    data(){
        return{
            pokemonView: [],
            paginationLimit: 12,
            offset: 0,
            selectedPokemons: [],
            selected: false
        }
    },
    methods:{
        async controllerPagination(){
            
            const pokemonsList = await LocalStorage.get(configs.localstorage.pokemonList)
            
            for(let i = this.offset; i < this.paginationLimit * (this.offset+1); i++){
                this.pokemonView.push(pokemonsList[i])
            }
        },

        deletePokemons(pokemon){
            let index = this.selectedPokemons.indexOf(pokemon)
            this.selectedPokemons.splice(index, 1)
        },
        clickOnCard(index){
            if(!this.selectedPokemons.includes(this.pokemonView[index]) 
            &&
            this.selectedPokemons.length < configs.pokemons.limitSlot){
                this.selectedPokemons.push(this.pokemonView[index])
            }
        }
    },
    created(){
        this.controllerPagination()
    },
    watch:{
        pokemonView: (newValue, oldValue)=>{
            console.log(newValue)
            
        }
    }
}

</script>

<style scoped>
.create-container{
    width:80%;
}
.slot-container{
    height:auto;
}
.card{
    min-width: 4rem;
    width:8rem;
    height:12rem;
    background-color: #393939;
    font-size: 4rem;
    color: #dedede;
    cursor: pointer
}
.card-select{
    cursor: pointer;
    width: 200px;
}
.card:hover{
    border: 1px dotted #0000ff
}
.pokemonList{
    width:100%;
    height:auto;
    background-color: #dedede;
}
</style>