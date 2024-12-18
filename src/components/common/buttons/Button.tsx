import './Button.css'
import { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode, onClick: ()=>void }> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='Button'>
            {children}
        </button>
    );
};

export default Button;