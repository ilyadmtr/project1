import React, {useEffect} from 'react';
import st from './Shop.module.scss'
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import {useDispatch} from "react-redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../../api/deviceAPI";
import {setBrands, setDevices, setTypes} from "../../store/reducer/deviceSlice";

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchTypes().then(data=>dispatch(setTypes(data)))
        fetchBrands().then(data=>dispatch(setBrands(data)))
        fetchDevices().then(data=>dispatch(setDevices(data.rows)))
    },[])
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