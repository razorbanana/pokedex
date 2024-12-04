import { FC, useState } from "react"
import Input from "./Input"

const Header:FC = () => {
    const [category, setCategory] = useState("general")
    const categoryChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setCategory(e.target.value)
    }
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