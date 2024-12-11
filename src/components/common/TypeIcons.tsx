import './TypeIcons.css'
import { FC } from "react";
import typesModule from "../../modules/typesModule";

const TypeIcons:FC<{urls:{type:{name:string}}[]}> = ({urls}) => {
    return (
        <div className="TypeIcons">
            {urls.map(type => <img src={typesModule.getTypeIconURL(type.type.name)} key={type.type.name} alt={type.type.name} className='TypeIcon'/>)}
        </div>
    )
}

export default TypeIcons