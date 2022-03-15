import React, {useState} from 'react';
import st from './TypeBar.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType} from "../../store/reducer/deviceSlice";

const TypeBar = () => {
    const {types, selectedType} = useSelector(state => state.deviceReducer)
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    return (
        <ul className={st.typeBar}>
            {types.map((type) =>
                <li
                    className={(type.id === selectedType?.id) && toggle ? st.active : ''}
                    key={type.id}
                    onClick={() => {
                        (type.id === selectedType?.id) ? dispatch(setSelectedType(null)) : dispatch(setSelectedType(type))
                        if((type.id === selectedType?.id)&&toggle){
                            setToggle(false)
                        }else{
                            setToggle(true)
                        }
                    }}
                >
                    {type.name}
                </li>
            )}

        </ul>
    );
};

export default TypeBar;