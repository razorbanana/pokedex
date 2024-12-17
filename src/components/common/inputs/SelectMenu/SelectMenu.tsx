import './SelectMenu.css'
import { FC } from 'react';
import SelectMenuCard from './SelectMenuCard';
import SelectMenuOptionsType from '../../../../types/componentPropsTypes/SelectMenuOptionsType';

const SelectMenu: FC<{options:SelectMenuOptionsType[]}> = ({options}) => {
    return (
        <div className='SelectMenu-Background'>
            <div className='SelectMenu'>
                {options.map((group, index) => {
                    return (
                        <div key={index} className='GroupContainer'>
                            <div className='GroupLabel'>{group.label}</div>
                            <div className='GroupGridWrapper'>
                                {group.group.map(option => <SelectMenuCard label={option.label} icon={option.icon} key={option.label} onClick={option.onClick}/>)}
                            </div>
                            <div className='jump'></div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default SelectMenu;