import React, {useState} from 'react';
import st from './Admin.module.scss'
import Button from "../../sharedComponents/Button/Button";
import CreateType from "../../components/popups/CreateType/CreateType";
import {useDispatch, useSelector} from "react-redux";
import {setPopUpType} from "../../store/reducer/deviceSlice";

const Admin = () => {
    const {popUpType}=useSelector(state=>state.deviceReducer)
    const dispatch=useDispatch()
    const [unShow,setUnShow]=useState(false)
    return (
        <div className={`_container ${st.admin}`}>
            <Button
                width={300}
                height={60}
                bgType={true}
                onClick={()=>{
                    dispatch(setPopUpType(true))
                    setUnShow(true)
                }}
            >
                add type
            </Button>
            <Button
                width={300}
                height={60}
                bgType={true}
            >
                add brand
            </Button>
            <Button
                width={300}
                height={60}
                bgType={true}
            >
                add device
            </Button>
            <CreateType unShow={unShow} show={popUpType} onHide={()=>{
                dispatch(setPopUpType(false))
            }}/>
        </div>
    );
};

export default Admin;