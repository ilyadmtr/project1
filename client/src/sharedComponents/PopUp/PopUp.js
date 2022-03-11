import React from 'react';
import st from './PopUp.module.scss';

const PopUp = ({children, show, onHide}) => {
    let unshow = false;
    if(show!=='firstMount'){
         unshow=true
    }
    return (
        <div className={
            `${show!=='firstMount'&&show ? `${st.active}` : ''} ${st.popup} ${unshow ? `${st.unshow}` : ''}`
        }
        >
            <div
                onClick={onHide}
                className={st.popup__close}
            ></div>
            {children}
        </div>
    );
};

export default PopUp;