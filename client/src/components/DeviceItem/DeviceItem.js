import React from 'react';
import st from './DeviceItem.module.scss'
import ParallaxImage from "../../sharedComponents/ParallaxImage/ParallaxImage";
import star from "../../assets/img/star.png"
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <div className={st.deviceItemCon} onClick={()=>navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <div className={st.deviceItem}>
                <ParallaxImage src={device.img} alt={device.name}/>
                <div className={st.deviceItem__main}>
                    <div className={st.deviceItem__main_title}>
                        Samsung...
                    </div>
                    <div className={st.deviceItem__main_rating}>
                        <div className=""> {device.rating} </div>
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div className="">
                    {device.name}
                </div>
                <div className="">
                    {device.price} $
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;