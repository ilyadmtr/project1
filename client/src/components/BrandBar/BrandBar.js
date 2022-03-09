import React from 'react';
import st from './BrandBar.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedBrand} from "../../store/reducer/deviceSlice";

const BrandBar = () => {
    const {brands, selectedBrand} = useSelector(state => state.deviceReducer)
    const dispatch = useDispatch()
    return (
        <ul className={st.brandBar}>
            {brands.map((brand) =>
                <li
                    className={(brand.id === selectedBrand.id) ? st.active:''}
                    key={brand.id}
                    onClick={() => {
                        dispatch(setSelectedBrand(brand))
                    }}
                >
                  <span className={st.brandBar__span}>
                      {brand.name}
                  </span>
                </li>
            )}

        </ul>
    );
};

export default BrandBar;