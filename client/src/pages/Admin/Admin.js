import React, {useState} from 'react';
import st from './Admin.module.scss'
import Button from "../../sharedComponents/Button/Button";
import CreateType from "../../components/popups/CreateType/CreateType";
import PopUp from "../../sharedComponents/PopUp/PopUp";
import CreateBrand from "../../components/popups/CreateBrand/CreateBrand";
import CreateDevice from "../../components/popups/CreateDevice/CreateDevice";

const Admin = () => {
    const [popUpType, setHideType] = useState(false)
    const [popUpBrand, setHideBrand] = useState(false)
    const [popUpDevice, setHideDevice] = useState(false)

    return (
        <div className={`_container ${st.admin}`}>
            <Button
                width={300}
                height={60}
                bgType={true}
                onClick={() => setHideType(true)}
            >
                add type
            </Button>
            <Button
                width={300}
                height={60}
                bgType={true}
                onClick={() => setHideBrand(true)}
            >
                add brand
            </Button>
            <Button
                width={300}
                height={60}
                bgType={true}
                onClick={() => setHideDevice(true)}
            >
                add device
            </Button>
            <PopUp show={popUpType} onHide={() => setHideType(false)}>
                <CreateType onHide={() => setHideType(false)}/>
            </PopUp>
            <PopUp show={popUpBrand} onHide={() => setHideBrand(false)}>
                <CreateBrand onHide={() => setHideBrand(false)}/>
            </PopUp>
            <PopUp show={popUpDevice} onHide={() => setHideDevice(false)}>
                <CreateDevice onHide={() => setHideDevice(false)}/>
            </PopUp>
        </div>
    );
};

export default Admin;