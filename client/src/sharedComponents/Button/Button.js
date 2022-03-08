import React from 'react';
import st from './Button.module.scss'

const Button = ({children,width,height,onClick,bgType,bgColor}) => {

        return <button
            className={st.btn}
            onClick={onClick}
            style={{
                width:`${width}px`,
                height:`${height}px`
            }}
        >
            <span className={st.btn__text}>
                {children}
            </span>
            <span
                style={{
                    width:`${width}px`,
                    height:`${width}px`,
                    background:bgColor,
                }}
                className={bgType?`${st.btn__waves} ${st.active}`:st.btn__waves}
            >

            </span>
        </button>
}

export default Button;