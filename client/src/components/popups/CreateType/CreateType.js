import React, {useState} from 'react';
import st from './CreateType.module.scss'
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";
import {createType} from "../../../api/deviceAPI";

const CreateType = ({onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name:value}).then(data=>setValue(''))
        onHide()
    }
    return (
        <div className={st.popupType}>
            <div className={st.popupType__head}>
                <div className={st.popupType__head_title}>
                    add type
                </div>
            </div>
            <div className={st.popupType__body}>
                <form action="">
                    <Input
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        type='text'
                        placeholder='Enter type name'/>
                </form>

            </div>
            <div className={st.popupType__footer}>
                <Button
                    onClick={onHide}
                    width={200}
                    height={42}
                    bgColor='#a72626'> Close</Button>
                <Button
                    onClick={addType}
                    width={200}
                    height={42}>ADD </Button>
            </div>
        </div>
    );
};

export default CreateType;