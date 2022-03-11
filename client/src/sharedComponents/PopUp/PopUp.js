import React from 'react';
import st from './PopUp.module.scss';

const PopUp = ({children, show, onHide}) => {

    return (
        <div className={
            `${show ? `${st.active}` : ''} ${st.popup} }`
        }
        >
            {children}
            <div
                onClick={onHide}
                className={st.popup__close}
            ></div>
        </div>
    );
};

export default PopUp;