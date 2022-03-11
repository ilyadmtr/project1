import React from 'react';
import st from './CreateDevice.module.scss';
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";
import Select from "../../../sharedComponents/Select/Select";
import {useSelector} from "react-redux";

const CreateDevice = ({onHide}) => {
    const {types,brands}=useSelector(state=>state.deviceReducer)
    return (
        <div className={st.popupDevice}>
            <div className={st.popupDevice__head}>
                <div className={st.popupDevice__head_title}>
                    add Device
                </div>
            </div>
            <div className={st.popupDevice__body}>
                <form action="">
                    <Input type='text' placeholder='Enter device name'/>
                  <div>
                      select type: <Select options={types}/>
                  </div>
                    <div>
                      select brand: <Select options={brands}/>
                  </div>
                </form>
            </div>
            <div className={st.popupDevice__footer}>
                <Button onClick={onHide} width={200} height={42} bgColor='#a72626'> Close</Button>
                <Button width={200} height={42}>ADD </Button>
            </div>
        </div>
    );
};

export default CreateDevice;