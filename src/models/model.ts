import { fetchPokemonNameList, getAbilityByUrl, getPokemonByName, getSpeciesByName } from "../api/pokemonAPI"
import observer, { EventNames } from "../observers/observer"
import AbilityDataType from "../types/apiDataTypes/AbilityDataType"
import PokemonDataType from "../types/apiDataTypes/PokemonDataType"
import PokemonInfo from "../types/apiDataTypes/PokemonInfoType"
import SpeciesDataType from "../types/apiDataTypes/SpeciesDataType"
import DefaultAbilityData from "../utility/defaults/DefaultAbilityData"
import DefaultPokemonData from "../utility/defaults/DefaultPokemonData"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


type Model = {
    fetchPokemonList:  () => Promise<void>,
    fetchPokemonAbilities: () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getData: <K extends keyof ModelData>(key:K) => ModelData[K],
    setData: <K extends keyof ModelData>(key: K, newData: ModelData[K]) => void
}

export enum ModelKeys {
    POKEMON = 'pokemon',
    POKEMONS = 'pokemons',
    SPECIES = 'species',
    ABILITIES = 'abilities'
}

type ModelData = {
    [ModelKeys.POKEMONS]: PokemonInfo[],
    [ModelKeys.POKEMON]: PokemonDataType,
    [ModelKeys.SPECIES]: SpeciesDataType,
    [ModelKeys.ABILITIES]: AbilityDataType[],
}

const Model = function():Model{
    const data:ModelData = {
        [ModelKeys.POKEMONS]: [],
        [ModelKeys.POKEMON]: DefaultPokemonData(),
        [ModelKeys.SPECIES]: DefaultSpeciesData(),
        [ModelKeys.ABILITIES]: DefaultAbilityData()
    }
    observer.subscribe(EventNames.SEARCH_POKEMON, (data:unknown):Promise<void> => updatePokemonData(data as string))
    observer.subscribe(EventNames.FETCH_ABILITIES, ():Promise<void> => fetchPokemonAbilities())

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        data[ModelKeys.POKEMONS] = pokemons
        observer.emit(EventNames.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        data[ModelKeys.POKEMON] = await getPokemonByName(name)
        data[ModelKeys.SPECIES] = await getSpeciesByName(name)
        observer.emit(EventNames.UPDATE_POKEMON, data[ModelKeys.POKEMON])
        observer.emit(EventNames.UPDATE_SPECIES, data[ModelKeys.SPECIES])
    }

    const fetchPokemonAbilities = async ():Promise<void> => {
        const abilityList = []
        for (const abilityObj of data[ModelKeys.POKEMON].abilities){
            const ability = await getAbilityByUrl(abilityObj.ability.url)
            abilityList.push(ability)
        }
        data[ModelKeys.ABILITIES] = abilityList
        observer.emit(EventNames.ABILITTIES_FETCHED, abilityList)
    }

    const getData = <K extends keyof ModelData>(key: K):ModelData[K] => {
        return data[key]
    } 

    const setData = <K extends keyof ModelData>(key: K, newData: ModelData[K]): void => {
        data[key] = newData
    }

    return {
        fetchPokemonList,
        fetchPokemonAbilities,
        updatePokemonData,
        getData,
        setData
    }
}

const model = Model()
export default model