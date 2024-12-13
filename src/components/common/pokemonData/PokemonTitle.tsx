import './PokemonTitle.css'
import { FC } from "react";
import TypeIcons from "./TypeIcons";

const PokemonTitle:FC<{name:string, id:string|number, types:{type:{name:string}}[]}> = ({name, id, types}) => {
    return (
        <div className='PokemonTitle'>{`${name.toUpperCase()} #${id}`}<TypeIcons urls={types} /></div>
    )
}

export default PokemonTitle