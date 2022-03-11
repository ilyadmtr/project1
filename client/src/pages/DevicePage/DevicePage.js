import React, {useEffect, useState} from 'react';
import st from './DevicePage.module.scss'
import Button from "../../sharedComponents/Button/Button";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../../api/deviceAPI";

const DevicePage = () => {

    const [device,setDevice] =useState({info:[]})
    const {id}=useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    },[])

    return (
        <div className={`_container`}>
            <div className={st.devicePage}>
                <div className={st.devicePage__block}>
                    <img src={process.env.REACT_APP_API_URL + device.img} alt={device.name}/>
                </div>
                <div className={st.devicePage__block}>
                    <h2 className={st.devicePage__block_title}>
                        {device.name}
                    </h2>
                    <div className={st.devicePage__block_img}>
                        <span>{device.rating}</span>
                    </div>
                </div>
                <div className={st.devicePage__block}>
                    <div className={st.devicePage__block_card}>
                        <div className={st.devicePage__block_card__price}>
                            {device.price} $
                        </div>
                        <Button
                            width={200}
                            height={48}
                            bgType={true}
                        >
                            add to basket
                        </Button>
                    </div>
                </div>
            </div>
            <div className={st.characteristic}>
                <h1 className={st.characteristic__title}>characteristic</h1>
                {device.info.map((info)=>
                    <div
                        key={info.id}
                        className={st.characteristic__line}>
                        {info.title} : {info.description}
                    </div>
                 )}
            </div>

        </div>
    );
};

export default DevicePage;