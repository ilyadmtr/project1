import React from 'react';
import { Route, Navigate, Routes} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop/Shop";
import Auth from "../pages/Auth/Auth";
import DevicePage from "../pages/DevicePage";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const {isAuth} = useSelector(state=>state.userReducer)
    return (<Routes>
        {isAuth &&
        <Route>
            <Route path={ADMIN_ROUTE} element={<Admin/>}/>
            <Route path={BASKET_ROUTE} element={<Basket/>}/>
        </Route>}
        <Route path={SHOP_ROUTE} element={<Shop/>}/>
        <Route path={LOGIN_ROUTE} element={<Auth/>}/>
        <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
        <Route path={DEVICE_ROUTE} element={<DevicePage/>}/>
        <Route path='*' element={<Navigate to={SHOP_ROUTE} />}/>
    </Routes>)
};

export default AppRouter;