import { FC } from "react";

const Select:FC<{value: string,onChange: React.ChangeEventHandler<HTMLSelectElement>, options: string[]}> = ({value, onChange, options}) => {
    return (
        <select value={value} onChange={onChange}>
            {options.map((option, id) => <option value={option} key={id}>{option}</option>)}
        </select>
    )
}

export default Select