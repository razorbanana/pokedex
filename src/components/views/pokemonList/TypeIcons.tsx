import { FC } from "react";

const TypeIcons:FC<{urls:{type:{name:string}}[]}> = ({urls}) => {
    return (
        <>
            {urls.map(type => <img src={`/types/${type.type.name}.svg`} key={type.type.name} alt={type.type.name} className='PokemonCard-TypeIcon'/>)}
        </>
    )
}

export default TypeIcons