type SelectMenuOptionsType = {
    label: string, 
    group: {
        label:string, 
        icon: string,
        onClick: () => void
    }[]
}

export default SelectMenuOptionsType