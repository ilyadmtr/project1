import React from 'react';
import st from  './Shop.module.scss'
import TypeBar from "../../components/TypeBar/TypeBar";

const Shop = () => {
    return (
        <div className={`_container ${st.shop}`}>
            <div className={st.shop__type}>
                <TypeBar/>
            </div>
            <div className={st.shop__main}>
                SHOP
            </div>

        </div>
    );
};

export default Shop;