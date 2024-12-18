import { FC } from 'react';
import SelectMenuOptionType from '../../../../types/componentPropsTypes/SelectMenuOptionType';

const SelectMenuCard: FC<{option: SelectMenuOptionType}> = ({option}) => {
    return (
        <div className='SelectMenuCard' onClick={option.onClick}>
            <img src={option.icon}/>
            <label>{option.label}</label>
        </div>
    );
};

export default SelectMenuCard;