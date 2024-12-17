import './AudioComponent.css'
import { FC, useEffect, useRef } from 'react';

const AudioComponent: FC<{src:string, label?: string}> = ({src, label}) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; 
        }
    }, []);

    return (
        <div className='AudioComponent' >
            {label ? <p className='AudioLabel'>{label}</p> : <></>}
            <audio ref={audioRef} controls>
                <source src={src} type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioComponent;