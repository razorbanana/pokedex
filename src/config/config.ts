interface Config {
    USER_NAME: string,
    INPUT_TYPES: typeof InputTypes,
    DISCOVERY: boolean,
    BASE_API_URL: string,
    POKEMON_CACHE_NAME: string,
    POKEMON_ENDPOINT: string,
    SPECIES_ENDPOINT: string,
    POKEMON_LIST_LIMIT: number,
    ERROR_SLIDER_TIMEOUT: number,
    POKEMON_LIST_SHOW_LIMIT: number,
    MODEL_KEYS: typeof ModelKeys,
    LOADING_ICON_URL: string
}



export enum InputTypes {
    SELECT_INPUT = 'select',
    SEARCH_INPUT = 'search'
}

export enum ModelKeys {
    POKEMON = 'pokemon',
    POKEMONS = 'pokemons',
}

const Config = function():Config{
    return {
        USER_NAME: "POKEUSER",
        INPUT_TYPES: InputTypes,
        DISCOVERY: import.meta.env.VITE_DISCOVERY === "true",
        BASE_API_URL: import.meta.env.VITE_BASE_URL,
        POKEMON_CACHE_NAME: import.meta.env.VITE_POKEMON_CACHE_NAME,
        POKEMON_ENDPOINT: import.meta.env.VITE_POKEMON_ENDPOINT,
        SPECIES_ENDPOINT: import.meta.env.VITE_SPECIES_ENDPOINT,
        POKEMON_LIST_LIMIT: import.meta.env.VITE_POKEMON_LIST_LIMIT || 20,
        ERROR_SLIDER_TIMEOUT: 2500,
        POKEMON_LIST_SHOW_LIMIT: 20,
        MODEL_KEYS: ModelKeys,
        LOADING_ICON_URL: "./loading.svg"
    }   
}

const config = Config()
Object.freeze(config)
export default config