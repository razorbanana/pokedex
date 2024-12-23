import AbilityDataType from "../../types/apiDataTypes/AbilityDataType"

const DefaultAbilityData = ():AbilityDataType[] => {
    return [
        {
            name: "wait",
            flavor_text_entries: [
                {
                flavor_text: "Ability to wait",
                language: {
                    name: "en",
                    url: ""
                },
            }]
        },
        {
            name: "wait2",
            flavor_text_entries: [
                {
                flavor_text: "Ability to wait2",
                language: {
                    name: "en",
                    url: ""
                },
            }]
        }
    ]
}

export default DefaultAbilityData