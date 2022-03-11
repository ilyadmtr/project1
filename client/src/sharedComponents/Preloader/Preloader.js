import React from 'react';
import st from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={st.container}>
            <div className={st.lds_dual_ring}></div>
        </div>
    );
};


export default Preloader;