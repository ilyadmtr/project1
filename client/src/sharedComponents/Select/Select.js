import React, {useState} from 'react';
import st from './Select.module.scss'

const Select = ({options}) => {
    const [select, setSelect] = useState(options[0].name)
    return (
        <select className={st.select} value={select}
                onChange={(e) =>
                    setSelect(e.target.value)}>
            {options.map((option)=>
                <option className={st.select__option}
                        key={option.id}
                        value={option.name} >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;