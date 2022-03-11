import React from 'react';
import st from './CreateBrand.module.scss';
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";

const CreateBrand =  ({onHide}) => {
    return (
        <div className={st.popupBrand}>
            <div className={st.popupBrand__head}>
                <div className={st.popupBrand__head_title}>
                    add brand
                </div>
            </div>
            <div className={st.popupBrand__body}>
                <form action="">
                    <Input type='text' placeholder='Enter brand name'/>
                </form>

            </div>
            <div className={st.popupBrand__footer}>
                <Button onClick={onHide} width={200} height={42} bgColor='#a72626'> Close</Button>
                <Button width={200} height={42} >ADD </Button>
            </div>
        </div>
    );
};

export default CreateBrand;