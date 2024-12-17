import { FC } from 'react';

const SelectMenuCard: FC<{label:string, icon?:string, onClick: ()=> void}> = ({label, icon, onClick}) => {
    return (
        <div className='SelectMenuCard' onClick={onClick}>
            <img src={icon}/>
            <label>{label}</label>
        </div>
    );
};

export default SelectMenuCard;