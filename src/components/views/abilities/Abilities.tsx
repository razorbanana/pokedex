import './Abilities.css'
import { FC, useEffect, useState } from 'react';
import PokemonDataType from '../../../types/apiDataTypes/PokemonDataType';
import DefaultPokemonData from '../../../utility/defaults/DefaultPokemonData';
import observer, { EventNames } from '../../../observers/observer';
import PokemonImage from '../../common/pokemonData/PokemonImage';
import PokemonTitle from '../../common/pokemonData/PokemonTitle';
import AbilityDataType from '../../../types/apiDataTypes/AbilityDataType';
import DefaultAbilityData from '../../../utility/defaults/DefaultAbilityData';
import Table from '../../common/Table/Table';
import TableColumnType from '../../../types/componentPropsTypes/Table/TableColumnType';
import AbilitiesTableType from '../../../types/componentPropsTypes/Abilities/AbilitiesTableType';
import controller from '../../../controllers/controller';

const Abilities: FC = () => {
    const [pokemon, setPokemon] = useState<PokemonDataType>(DefaultPokemonData())
    const [abilities, setAbilities] = useState<AbilityDataType[]>(DefaultAbilityData())

    useEffect(()=>{
        const action = (data?:PokemonDataType) => {
            console.log("action sets pokemon")
            if (data){
                setPokemon(data)
            }            
        }
        observer.subscribe(EventNames.UPDATE_POKEMON, action)
        return () => observer.unsubscribe(EventNames.UPDATE_POKEMON, action)
    }, [])

    useEffect(()=>{
        const action = (data?:AbilityDataType[]) => {
            if (data){
                setAbilities(data)
            }            
        }
        observer.subscribe(EventNames.ABILITTIES_FETCHED, action)
        return () => observer.unsubscribe(EventNames.ABILITTIES_FETCHED, action)
    }, [])

    useEffect(()=>{
        setPokemon(controller.getChosenPokemon())
    },[])

    useEffect(()=>{
        observer.emit(EventNames.FETCH_ABILITIES)
    }, [pokemon])

    const abilitiesTableData: AbilitiesTableType[] = abilities.map(ability => {
        return {
            name: ability.name,
            flavor_text: ability.flavor_text_entries[0].flavor_text
        }
    })

    const columns: TableColumnType<AbilitiesTableType>[] = [
        {
            title: "Ability",
            type: "string" as const,
            key: "name",
            sortCallback: (a:string,b:string) => (a>b?1:-1),
        },
        {
            title: "Flavor text",
            type: "string" as const,
            key: "flavor_text",
            sortCallback: (a:string,b:string) => (a>b?1:-1),
        }
    ]
    return (
        <div className="AbilitiesPage">
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <div className="LayoutWrapper">
                <PokemonImage src={pokemon.sprites.front_default}/>
                <Table<AbilitiesTableType> title='Abilities' subtitle={`abilities of ${pokemon.name}`} columns={columns} data={[...abilitiesTableData]}/>
            </div>
        </div>
    );
};

export default Abilities;