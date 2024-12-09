interface Config {
    USER_NAME: string,
    EVENT_NAMES: typeof EventNames,
    INPUT_TYPES: typeof InputTypes,
    CATEGORIES: typeof Categories,
    DISCOVERY: boolean,
    BASE_API_URL: string,
    POKEMON_CACHE_NAME: string,
    POKEMON_ENDPOINT: string,
    POKEMON_LIST_LIMIT: number
}

export enum EventNames {
  UPDATE_CATEGORY = 'update_category',
  UPDATE_POKEMON = 'update_pokemon',
  SHOW_ERROR = 'show_error'
}

export enum InputTypes {
    SELECT_INPUT = 'select',
    SEARCH_INPUT = 'search'
}

export enum Categories {
    GENERAL = 'general',
    ABILITIES = 'abilities'
}

const Config = function():Config{
    return {
        USER_NAME: "POKEUSER",
        EVENT_NAMES: EventNames,
        INPUT_TYPES: InputTypes,
        CATEGORIES: Categories,
        DISCOVERY: import.meta.env.VITE_DISCOVERY === "true",
        BASE_API_URL: import.meta.env.VITE_BASE_URL,
        POKEMON_CACHE_NAME: import.meta.env.VITE_POKEMON_CACHE_NAME,
        POKEMON_ENDPOINT: import.meta.env.VITE_POKEMON_ENDPOINT,
        POKEMON_LIST_LIMIT: import.meta.env.VITE_POKEMON_LIST_LIMIT || 20
    }
}

const config = Config()
Object.freeze(config)
export default config