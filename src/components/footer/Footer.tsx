import config from '../../config/config';
import './Footer.css'
import { FC } from "react";

const Footer:FC = () => {
    return (
        <div className='Footer'>
            <div className='FooterGridWrapper'>
                <div>
                    <h2>Contact me</h2>
                    <h4>{config.FOOTER_GMAIL}</h4>
                </div>
                <div>
                    <h2>Github</h2>
                    <h4><a href={config.FOOTER_GITHUB} target="_blank" rel="noopener noreferrer">Click me!</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Footer