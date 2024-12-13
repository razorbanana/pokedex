import './AudioComponent.css'
import { FC } from 'react';

const AudioComponent: FC<{src:string, label?: string}> = ({src, label}) => {
    return (
        <div className='AudioComponent'>
            {label ? <p className='AudioLabel'>{label}</p> : <></>}
            <audio controls>
                <source src={src} type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioComponent;