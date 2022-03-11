import React, {useState} from 'react';
import st from './CreateDevice.module.scss';
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";
import Select from "../../../sharedComponents/Select/Select";
import {useSelector} from "react-redux";

const CreateDevice = ({onHide}) => {
    const {types, brands} = useSelector(state => state.deviceReducer)
    const [info, setInfo] = useState([])
    const addInfo=(e)=>{
        e.preventDefault()
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const removeInfo=(e,number)=>{
        e.preventDefault()
        setInfo(info.filter((i)=>i.number!==number))
    }

    return (
        <div className={st.popupDevice}>
            <div className={st.popupDevice__head}>
                <div className={st.popupDevice__head_title}>
                    add Device
                </div>
            </div>
            <div className={st.popupDevice__body}>
                <div  className={st.popupDevice__form}>
                    <div>
                        select type: <Select options={types}/>
                    </div>
                    <div>
                        select brand: <Select options={brands}/>
                    </div>
                    <Input type='text' placeholder='Enter device name'/>
                    <Input type='number' placeholder='Enter device price'/>
                    <Input type='file' placeholder='Enter device name'/>

                    <Button
                        width={200}
                        height={42}
                        bgColor='#006BD7'
                        onClick={addInfo}
                    >
                        Add new value
                    </Button>
                    <div className={st.popupDevice__form_container}>
                        {
                            info.map((i) =>
                                <div key={i.number} className={st.popupDevice__form_value}>
                                    <Input type='text' placeholder='Enter value name' />
                                    <Input type='text' placeholder='Enter value name' />
                                    <Button
                                        width={120}
                                        height={42}
                                        bgColor='#a72626'
                                        onClick={(e)=>removeInfo(e,i.number)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
            <div className={st.popupDevice__footer}>
                <Button onClick={onHide} width={200} height={42} bgColor='#a72626'> Close</Button>
                <Button width={200} height={42}>ADD </Button>
            </div>
        </div>
    );
};

export default CreateDevice;