import React from 'react';
import st from "./DeviceList.module.scss"
import {useSelector} from "react-redux";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
    const {devices} = useSelector(state => state.deviceReducer)
    return (
        <div className={st.deviceList}>
            {devices.map((device) =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
};

export default DeviceList;