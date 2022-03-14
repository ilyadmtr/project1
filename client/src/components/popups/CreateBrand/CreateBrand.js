import React, {useState} from 'react';
import st from './CreateBrand.module.scss';
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";
import {createBrand} from "../../../api/deviceAPI";

const CreateBrand =  ({onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name:value}).then(data=>setValue(''))
        onHide()
    }
    return (
        <div className={st.popupBrand}>
            <div className={st.popupBrand__head}>
                <div className={st.popupBrand__head_title}>
                    add brand
                </div>
            </div>
            <div className={st.popupBrand__body}>
                <form action="">
                    <Input
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        type='text'
                        placeholder='Enter brand name'/>
                </form>

            </div>
            <div className={st.popupBrand__footer}>
                <Button
                    onClick={onHide}
                    width={200}
                    height={42}
                    bgColor='#a72626'> Close</Button>
                <Button
                    onClick={addBrand}
                    width={200}
                    height={42} >ADD </Button>
            </div>
        </div>
    );
};

export default CreateBrand;