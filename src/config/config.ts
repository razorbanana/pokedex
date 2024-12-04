interface Config {
    USER_NAME: string,
    EVENT_NAMES: typeof EventNames
}

export enum EventNames {
  UPDATE_CATEGORY = 'update_category',
  UPDATE_POKEMON = 'update_pokemon',
}

const Config = function():Config{
    return {
        USER_NAME: "POKEUSER",
        EVENT_NAMES: EventNames
    }
}

const config = Config()
Object.freeze(config)
export default config