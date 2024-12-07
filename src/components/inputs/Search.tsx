import { FC } from "react"
import './inputs.css'

const Search:FC<{value: string, onChange:React.ChangeEventHandler<HTMLInputElement>}> = ({value, onChange}) => {
    return (
        <div className="Search">
            <input value={value} onChange={onChange} />
            <button><img src="/search.svg" alt="Icon" width="20" height="20" /></button>
        </div>
        
    )
}

export default Search