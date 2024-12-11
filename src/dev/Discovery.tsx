import "./Discovery.css"
import { FC, useState } from "react"
import PokemonSearch from "../components/header/PokemonSearch"
import CategorySelect from "../components/header/CategorySelect"
import Header from "../components/header/Header"
import Body from "../components/Body"
import General from "../components/views/general/General"
import PokemonData from "../components/views/general/PokemonPage"
import SillyButtons from "./sillybuttons/SillyButtons"
import ErrorSlider from "../components/common/ErrorSlider"
import PokemonList from "../components/views/pokemonList/PokemonList"
import PokemonRecap from "../components/views/pokemonList/PokemonCard"
import TempLoading from "./TempLoading"

const Discovery:FC = () => {
    const [checkes, setCheckes] = useState<{
        silly: boolean,
        header: boolean,
        body: boolean,
        list: boolean,
        general: boolean,
        footer: boolean
    }>({
        silly: false,
        header: false,
        body: false,
        list: true,
        general: false,
        footer: false
    })

    const handleCheckboxChange = (part: keyof typeof checkes) => {
        setCheckes((prev) => ({
            ...prev,
            [part]: !prev[part], 
        }));
    }

    return (
        <div className="Discovery">
            <h3>Toggle Parts</h3>
            {Object.keys(checkes).map((key) => (
                <div key={key}>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkes[key as keyof typeof checkes]}
                            onChange={() => handleCheckboxChange(key as keyof typeof checkes)}
                        />
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                </div>
            ))}
            <ErrorSlider />
            <h1>Discovery Component</h1>
            {checkes.silly && <>
                <h2>Silly Buttons</h2>
                <SillyButtons />
            </>}
            {checkes.header && <>
                <h2>Header</h2>
                <Header />
                <h2>Pokemon Search</h2>
                <PokemonSearch />
                <h2>Category Select</h2>
                <CategorySelect />
            </>}
            {checkes.body && <>
                <h2>Loading</h2>
                <TempLoading />
                <h2>Body</h2>
                <Body />
            </>}
            {checkes.list && <>
                <h2>Body</h2>
                <Body />
                <h2>Pokemon List</h2>
                <PokemonList />
                <h2>Pokemon Card</h2>
                <PokemonRecap pokemonName="pikachu" />
            </>}
            {checkes.general && <>
                <h2>General</h2>
                <General />
                <h2>PokemonData</h2> 
                <PokemonData />
            </>}
            
            
        </div>
    )
}

export default Discovery