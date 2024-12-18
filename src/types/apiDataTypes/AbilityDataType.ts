type AbilityDataType = {
    name: string,
    flavor_text_entries: {
        flavor_text: string,
        language: {
            name: string,
            url: string
        },
    }[];
}

export default AbilityDataType;