import React, {useState} from 'react';
import st from './Admin.module.scss'
import Button from "../../sharedComponents/Button/Button";
import CreateType from "../../components/popups/CreateType/CreateType";
import PopUp from "../../sharedComponents/PopUp/PopUp";
import CreateBrand from "../../components/popups/CreateBrand/CreateBrand";
import CreateDevice from "../../components/popups/CreateDevice/CreateDevice";
import DeleteType from "../../components/popups/DeleteType/DeleteType";
import DeleteBrand from "../../components/popups/DeleteBrand/DeleteBrand";
import DeleteDevice from "../../components/popups/DeleteDevice/DeleteDevice";

const Admin = () => {
    const [popUpType, setHideType] = useState(false)
    const [popUpDeleteType, setHideDeleteType] = useState(false)
    const [popUpBrand, setHideBrand] = useState(false)
    const [popUpDeleteBrand, setHideDeleteBrand] = useState(false)

    const [popUpDevice, setHideDevice] = useState(false)
    const [popUpDeleteDevice, setHideDeleteDevice] = useState(false)

    return (
        <div className={`_container ${st.admin}`}>
            <div className={st.admin__block}>
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
                    bgColor='#a72626'
                    onClick={() => setHideDeleteType(true)}
                >
                    delete type
                </Button>
            </div>

            <div className={st.admin__block}>
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
                    bgColor='#a72626'
                    onClick={() => setHideDeleteBrand(true)}
                >
                    delete brand
                </Button>
            </div>

            <div className={st.admin__block}>
                <Button
                    width={300}
                    height={60}
                    bgType={true}
                    onClick={() => setHideDevice(true)}
                >
                    add device
                </Button>
                <Button
                    width={300}
                    height={60}
                    bgType={true}
                    bgColor='#a72626'
                    onClick={() => setHideDeleteDevice(true)}
                >
                    delete device
                </Button>
            </div>



            <PopUp show={popUpType} onHide={() => setHideType(false)}>
                <CreateType onHide={() => setHideType(false)}/>
            </PopUp>
            <PopUp show={popUpDeleteType} onHide={() => setHideDeleteType(false)}>
                <DeleteType onHide={() => setHideDeleteType(false)}/>
            </PopUp>

            <PopUp show={popUpBrand} onHide={() => setHideBrand(false)}>
                <CreateBrand onHide={() => setHideBrand(false)}/>
            </PopUp>
            <PopUp show={popUpDeleteBrand} onHide={() => setHideDeleteBrand(false)}>
                <DeleteBrand onHide={() => setHideDeleteBrand(false)}/>
            </PopUp>

            <PopUp show={popUpDevice} onHide={() => setHideDevice(false)}>
                <CreateDevice onHide={() => setHideDevice(false)}/>
            </PopUp>
            <PopUp show={popUpDeleteDevice} onHide={() => setHideDeleteDevice(false)}>
                <DeleteDevice onHide={() => setHideDeleteDevice(false)}/>
            </PopUp>
        </div>
    );
};

export default Admin;