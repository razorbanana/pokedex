import VersionObjectType from "../../types/moduleObjectsTypes/VersionObjectType"

const DefaultVersionObject = ():Required<VersionObjectType> => {
    return {
            label: "In development",
            icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
}

export default DefaultVersionObject