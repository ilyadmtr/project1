import React, {useState} from 'react';
import st from './Select.module.scss'
import {useDispatch} from "react-redux";

const Select = ({options, set}) => {
    const dispatch = useDispatch()
    const [select, setSelect] = useState(options[0]?.name)
    const [active, setActive] = useState(false)
    const optionClick = (e,option) => {
        [...e.target.parentElement.children].forEach(el=>
            el.classList.contains(`${st.active}`) && el.classList.remove(`${st.active}`)
        )
        e.target.classList.add(`${st.active}`)
        setSelect(option.name)
        dispatch(set(option))
    }
    const selectClick = () => setActive(!active)

    return (
        <div className={st.select + ` ${active ? st.active : ''}`}
             onClick={selectClick}
        >
            <div className={st.select__head}>
                {select}
            </div>
            <div className={st.select__option_container}>
                {options.map((option) =>
                    <div className={st.select__option}
                         key={option.id}
                         onClick={(e) => optionClick(e,option)}
                    >
                        {option.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;