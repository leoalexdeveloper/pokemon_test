import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default class ServicePokemon{
    static async getPokemon(id){
        return await api.get(`pokemon/${id}`).then(res => res.data)
    }
}