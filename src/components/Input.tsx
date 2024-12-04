import { FC } from "react";
import Search from "./inputs/Search";
import Select from "./inputs/Select";
import DefaultInput from "./inputs/DefaultInput";
import config from "../config/config";

const Input:FC<{type:string, onChange:React.ChangeEventHandler<HTMLSelectElement|HTMLInputElement>, options?: string[]}> = ({type, onChange, options=[]}) => {
    const renderInput:() => JSX.Element = () => {
                switch(type){
                    case config.INPUT_TYPES.SELECT_INPUT:
                        return <Select onChange={onChange} options={options}/>
                    case config.INPUT_TYPES.SEARCH_INPUT:
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