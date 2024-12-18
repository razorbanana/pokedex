import { FC } from "react"
import './Search.css'

const Search:FC<{value: string, onChange:React.ChangeEventHandler<HTMLInputElement>, onSubmit: ()=>void}> = ({value, onChange, onSubmit}) => {
    return (
        <div className="Search">
            <input value={value} onChange={onChange} />
            <button onClick={onSubmit}><img src="/search.svg" alt="Icon" width="20" height="20" /></button>
        </div>
        
    )
}

export default Search