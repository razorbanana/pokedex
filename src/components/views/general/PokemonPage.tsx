import { FC, useEffect, useState } from "react"
import observer, { EventNames } from "../../../observers/observer"
import PokemonData from "../../../types/apiDataTypes/PokemonDataType"
import DefaultPokemonData from "../../../utility/defaults/DefaultPokemonData"
import PokemonTitle from "../../common/pokemonData/PokemonTitle"
import DataField from "../../common/pokemonData/DataField"
import SpeciesDataType from "../../../types/apiDataTypes/SpeciesDataType"
import DefaultSpeciesData from "../../../utility/defaults/DefaultSpeciesData"
import fixFlavorText from "../../../utility/helpers/flavorTextFix"
import PokemonImage from "../../common/pokemonData/PokemonImage"
import controller from "../../../controllers/controller"
import AudioComponent from "../../common/pokemonData/AudioComponent"

const PokemonPage:FC = () => {
    const [pokemon, setPokemon] = useState<PokemonData>(DefaultPokemonData())
    const [speciesData, setSpeciesData] = useState<SpeciesDataType>(DefaultSpeciesData())
    const flavor_text = fixFlavorText(speciesData.flavor_text_entries[0].flavor_text)
    useEffect(()=> {
        const action = (data?:PokemonData) => {
            if(data){
                setPokemon(data)
            }
        }
        observer.subscribe(EventNames.UPDATE_POKEMON, action)
        return () => {
            observer.unsubscribe(EventNames.UPDATE_POKEMON, action)
        }
    }, [])
    useEffect(()=> {
        const action = (data:unknown) => setSpeciesData(data as SpeciesDataType)
        observer.subscribe(EventNames.UPDATE_SPECIES, action)
        return () => {
            observer.unsubscribe(EventNames.UPDATE_SPECIES, action)
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
                {Object.keys(pokemon.cries).map((cry:string) => {
                    if (cry === "latest" || cry === "legacy") {
                        return <AudioComponent key={pokemon.cries[cry]} src={pokemon.cries[cry]} label={cry} />;
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default PokemonPage