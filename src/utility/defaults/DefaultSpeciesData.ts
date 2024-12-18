import SpeciesDataType from "../../types/SpeciesDataType";

const DefaultSpeciesData:() => SpeciesDataType = () => {
    return {
        capture_rate: 0,
        flavor_text_entries: [
            {
                flavor_text: "Choose me in list or using search input",
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