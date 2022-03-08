import React, {useState} from 'react';
import st from './Input.module.scss'

const Input = ({type,placeholder}) => {
    const [focus,setFocus] = useState(false)
    return (
        <div className={focus?`${st.input} ${st.active}`:st.input}
             onFocus={()=>{
                 setFocus(true)
             }}
             onBlur={()=>{
                 setFocus(false)
             }}
        >
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;