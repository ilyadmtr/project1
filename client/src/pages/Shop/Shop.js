import React from 'react';
import st from  './Shop.module.scss'
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";

const Shop = () => {
    return (
        <div className={`_container ${st.shop}`}>
            <div className={st.shop__type}>
                <TypeBar/>
            </div>
            <div className={st.shop__main}>
                <BrandBar/>
                <DeviceList/>
            </div>

        </div>
    );
};

export default Shop;