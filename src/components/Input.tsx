import { FC } from "react";
import Search from "./inputs/Search";
import Select from "./inputs/Select";
import DefaultInput from "./inputs/DefaultInput";

const Input:FC<{type:string, onChange:React.ChangeEventHandler<HTMLSelectElement|HTMLInputElement>, options?: string[]}> = ({type, onChange, options=[]}) => {
    const renderInput = () => {
                switch(type){
                    case "select":
                        return <Select onChange={onChange} options={options}/>
                    case "search":
                        return <Search/>
                    default:
                        return <DefaultInput/>
                }
            }
    return (
        <>
            {renderInput()}
        </>
    )
}

export default Input