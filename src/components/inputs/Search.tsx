import { FC } from "react"

const Search:FC<{value: string, onChange:React.ChangeEventHandler<HTMLInputElement>}> = ({value, onChange}) => {
    return (
        <input value={value} onChange={onChange}/>
    )
}

export default Search