import { FC, useEffect, useState } from "react"
import observer from "../../../observers/observer"
import config from "../../../config/config"
import PokemonData from "../../../types/PokemonDataType"
import DefaultPokemonData from "../../../utility/defaults/DefaultPokemon"
import PokemonTitle from "../../common/PokemonTitle"
import DataField from "../../common/DataField"
import SpeciesDataType from "../../../types/SpeciesDataType"
import DefaultSpeciesData from "../../../utility/defaults/DefaultSpeciesData"
import fixFlavorText from "../../../utility/flavorTextFix"
import PokemonImage from "../../common/PokemonImage"
import controller from "../../../controllers/controller"

const PokemonPage:FC = () => {
    const [pokemon, setPokemon] = useState<PokemonData>(DefaultPokemonData())
    const [speciesData, setSpeciesData] = useState<SpeciesDataType>(DefaultSpeciesData())
    const flavor_text = fixFlavorText(speciesData.flavor_text_entries[0].flavor_text)
    useEffect(()=> {
        const action = (data:unknown) => setPokemon(data as PokemonData)
        observer.subscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        }
    }, [])
    useEffect(()=> {
        const action = (data:unknown) => setSpeciesData(data as SpeciesDataType)
        observer.subscribe(config.EVENT_NAMES.UPDATE_SPECIES, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_SPECIES, action)
        }
    }, [])
    useEffect(()=> {
        setPokemon(controller.getChosenPokemon())
        setSpeciesData(controller.getChosenSpecies())
    }, [])

    return (
        <div className="PokemonPage">
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <div className="LayoutWrapper">
                <PokemonImage src={pokemon.sprites.front_default}/>
                <div className="PokemonInfoWrapper">
                    <DataField label="Flavor Text" value={flavor_text} />
                    <DataField label="Height" value={pokemon.height} />
                    <DataField label="Weight" value={pokemon.weight} />
                </div>
            </div>
        </div>
    )
}

export default PokemonPage