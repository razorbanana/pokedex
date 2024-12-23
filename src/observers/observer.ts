import { Categories } from "../modules/categoryModule"
import AbilityDataType from "../types/apiDataTypes/AbilityDataType"
import PokemonData from "../types/apiDataTypes/PokemonDataType"
import PokemonInfo from "../types/apiDataTypes/PokemonInfoType"
import SpeciesDataType from "../types/apiDataTypes/SpeciesDataType"

interface Observer {
    subscribe: <E extends keyof Events>(name:E, action: Action<E>) => void,
    unsubscribe: <E extends keyof Events>(name:E, action: Action<E>) => void,
    emit: <E extends keyof Events>(name:E, data?: Events[E]) => void,
}

export enum EventNames {
    UPDATE_CATEGORY= 'update_category',
    UPDATE_POKEMON= 'update_pokemon',
    SEARCH_POKEMON= 'search_pokemon',
    SHOW_ERROR= 'show_error',
    POKEMON_LIST_FETCHED= 'pokemon_list_fetched',
    UPDATE_SPECIES= 'update_species',
    FETCH_ABILITIES= 'fetch_abilities',
    ABILITTIES_FETCHED='abilities_fetched'
}

type Events = {
    [EventNames.UPDATE_CATEGORY]: Categories,
    [EventNames.UPDATE_POKEMON]: PokemonData,
    [EventNames.SEARCH_POKEMON]: string,
    [EventNames.SHOW_ERROR]: string,
    [EventNames.POKEMON_LIST_FETCHED]: PokemonInfo[],
    [EventNames.UPDATE_SPECIES]: SpeciesDataType,
    [EventNames.ABILITTIES_FETCHED]: AbilityDataType[],
    [EventNames.FETCH_ABILITIES]: void,

}

type Action<E extends keyof Events> = (data?: Events[E]) => void

type EventHandlers = {
    [E in keyof Events]?: Action<E>[];
};

const Observer = function():Observer{
    
    const events:EventHandlers = {}

    const subscribe = <E extends keyof Events>(name:E, action: Action<E>):void => {
        if (!events[name]) {
            events[name] = [];
        }
        events[name].push(action);
    }

    const unsubscribe = <E extends keyof Events>(name:E, action: Action<E>):void => {
        if (events[name]) {
            const newEvents = events[name].filter((subscriber) => subscriber !== action);
            events[name] = newEvents as EventHandlers[E]
        }
    }

    const emit = <E extends keyof Events>(name:E, data?: Events[E]): void => {
        events[name]?.forEach(action => action(data))
    }

    return {
        subscribe,
        unsubscribe,
        emit
    }
}

const observer = Observer()
export default observer