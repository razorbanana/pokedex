type FlavorText = {
    flavor_text: string,
    language: {
        name: string
    },
    version: {
        name: string
    }
}

type SpeciesDataType = {
    capture_rate: number;
    flavor_text_entries: FlavorText[],
    color: {
        name: string
    }
}

export default SpeciesDataType