import './DataField.css'
import { FC } from "react";

const DataField:FC<{label:string, value:string|number}> = ({label, value}) => {
    return(
        <div className='DataField'>
            <p className='DataField-Label'>{label}</p>
            <p className='DataField-Value'>{value}</p>
        </div>
    )
}

export default DataField