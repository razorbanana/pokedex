import { FC } from "react";

const Select:FC<{onChange: React.ChangeEventHandler<HTMLSelectElement>, options: string[]}> = ({onChange, options}) => {
    return (
        <select onChange={onChange}>
            {options.map(option => <option value={option}></option>)}
        </select>
    )
}

export default Select