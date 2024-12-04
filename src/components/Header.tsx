import { FC, useEffect, useState } from "react"
import Input from "./Input"
import observer from "../observers/observer"
import config, { Categories } from "../config/config"

const Header:FC = () => {
    const [category, setCategory] = useState("general")
    const categoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        observer.emit(config.EVENT_NAMES.UPDATE_CATEGORY, e.target.value)
    }
    useEffect(() => {
        observer.subscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_CATEGORY, (data: unknown) => setCategory(data as Categories))
        }
    }, [])
    return (
        <div>
            {category}
            {/*
                Component for view select
            */}
            <Input type="select" onChange={categoryChange} />
            {/*
                Component for pokemon search
            */}
        </div>
    )
}

export default Header