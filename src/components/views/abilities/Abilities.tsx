import './Abilities.css'
import { FC, useEffect, useState } from 'react';
import PokemonDataType from '../../../types/apiDataTypes/PokemonDataType';
import DefaultPokemonData from '../../../utility/defaults/DefaultPokemonData';
import observer, { EventNames } from '../../../observers/observer';
import PokemonImage from '../../common/pokemonData/PokemonImage';
import PokemonTitle from '../../common/pokemonData/PokemonTitle';
import AbilityDataType from '../../../types/apiDataTypes/AbilityDataType';
import DefaultAbilityData from '../../../utility/defaults/DefaultAbilityData';
import { getAbilityByUrl } from '../../../api/pokemonAPI';
import Table from '../../common/Table/Table';

const Abilities: FC = () => {
    const [pokemon, setPokemon] = useState<PokemonDataType>(DefaultPokemonData())
    const [abilities, setAbilities] = useState<AbilityDataType[]>([DefaultAbilityData()])

    useEffect(()=>{
        const action = (data?:PokemonDataType) => {
            if (data){
                setAbilities([])
                setPokemon(data)
            }            
        }
        observer.subscribe(EventNames.UPDATE_POKEMON, action)
        return () => observer.unsubscribe(EventNames.UPDATE_POKEMON, action)
    }, [])

    useEffect(()=>{
        for (const ability of pokemon.abilities){
            getAbilityByUrl(ability.ability.url).then(result => {
                setAbilities(prevAbilities => [...prevAbilities, result])
            })
        }
    }, [pokemon])

    const columns = [
        {
            title: "Ability",
            type: "string" as const,
            data: abilities.map(ability => ability.name),
            sortCallback: (a:string,b:string) => (a>b?1:-1),
        },
        {
            title: "Flavor text",
            type: "string" as const,
            data: abilities.map(ability => ability.flavor_text_entries[0].flavor_text),
            sortCallback: (a:string,b:string) => (a>b?1:-1),
        }
    ]

    return (
        <div className="AbilitiesPage">
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <div className="LayoutWrapper">
                <PokemonImage src={pokemon.sprites.front_default}/>
                <Table title='Abilities' subtitle={`abilities of ${pokemon.name}`} columns={columns}/>
            </div>
        </div>
    );
};

export default Abilities;