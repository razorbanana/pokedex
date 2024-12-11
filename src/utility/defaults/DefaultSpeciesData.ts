import SpeciesDataType from "../../types/SpeciesDataType";

const DefaultSpeciesData:() => SpeciesDataType = () => {
    return {
        capture_rate: 0,
        flavor_text_entries: [
            {
                flavor_text: "Do you really think I have flavor text?",
                language: {
                    name: "en"
                },
                version: {
                    name: "all"
                }
            }
        ],
        color: {
            name: "green"
        }
    }
}

export default DefaultSpeciesData