export default class Team{
    constructor(name, pokemons = [], updatedAt){
        this.name = name
        this.pokemons = pokemons
        this.createdAt = new Date('now')
        this.updatedAt = updatedAt
    }
    
}