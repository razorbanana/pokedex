import './PokemonImage.css'
import { FC } from 'react';

const PokemonImage: FC<{src:string}> = ({src}) => {
    return (
        <img src={src} className='PokemonImage'/>
    );
};

export default PokemonImage;