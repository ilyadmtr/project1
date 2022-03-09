import React from 'react';
import st from './TypeBar.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType} from "../../store/reducer/deviceSlice";

const TypeBar = () => {
    const {types,selectedType} = useSelector(state => state.deviceReducer)
    const dispatch = useDispatch()
    return (
        <ul className={st.typeBar}>
            {types.map((type) =>
                <li
                    className={(type.id === selectedType.id) ? st.active:''}
                    key={type.id}
                    onClick={()=>{
                        dispatch(setSelectedType(type))
                    }}
                >
                    {type.name}
                </li>
            )}

        </ul>
    );
};

export default TypeBar;