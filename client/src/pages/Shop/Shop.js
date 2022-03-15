import React, {useEffect} from 'react';
import st from './Shop.module.scss'
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../../api/deviceAPI";
import {setBrands, setDevices, setTotalCount, setTypes} from "../../store/reducer/deviceSlice";
import Pagination from "../../components/Pagination/Pagination";

const Shop = () => {
    const dispatch = useDispatch()
    const {selectedType,selectedBrand, limit, page} = useSelector(state => state.deviceReducer)


    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
        fetchDevices(null, null, page, limit).then(data => {
                dispatch(setDevices(data.rows))
                dispatch(setTotalCount(data.count))
            }
        )
    }, [])

    useEffect(() => {
        fetchDevices(selectedType?.id, selectedBrand?.id, page, limit).then(data => {
                dispatch(setDevices(data.rows))
                dispatch(setTotalCount(data.count))
            }
        )
    }, [page,selectedType,selectedBrand])
    return (
        <div className={`_container ${st.shop}`}>
            <div className={st.shop__type}>
                <TypeBar/>
            </div>
            <div className={st.shop__main}>
                <BrandBar/>
                <DeviceList/>
                <Pagination/>
            </div>

        </div>
    );
};

export default Shop;