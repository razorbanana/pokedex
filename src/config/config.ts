interface Config {
    USER_NAME: string,
    EVENT_NAMES: typeof EventNames,
    INPUT_TYPES: typeof InputTypes,
    CATEGORIES: typeof Categories
}

export enum EventNames {
  UPDATE_CATEGORY = 'update_category',
  UPDATE_POKEMON = 'update_pokemon',
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
        CATEGORIES: Categories
    }
}

const config = Config()
Object.freeze(config)
export default config