import React, {useState} from 'react';
import st from './BrandBar.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedBrand} from "../../store/reducer/deviceSlice";

const BrandBar = () => {
    const {brands, selectedBrand} = useSelector(state => state.deviceReducer)
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    return (
        <ul className={st.brandBar}>
            {brands.map((brand) =>
                <li
                    className={(brand.id === selectedBrand?.id)&&toggle ? st.active:''}
                    key={brand.id}
                    onClick={() => {
                        (brand.id === selectedBrand?.id) ? dispatch(setSelectedBrand(null)) : dispatch(setSelectedBrand(brand))
                        if((brand.id === selectedBrand?.id)&&toggle){
                            setToggle(false)
                        }else{
                            setToggle(true)
                        }
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