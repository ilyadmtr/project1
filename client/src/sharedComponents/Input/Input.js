import React, {useState} from 'react';
import st from './Input.module.scss'

const Input = ({type,placeholder,value,onChange}) => {
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
            <input value={value}
                   onChange={onChange}
                   type={type}
                   placeholder={placeholder}
            />
        </div>
    );
};

export default Input;