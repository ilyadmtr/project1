import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeBrand} from "../../../api/deviceAPI";
import {setSelectedBrand} from "../../../store/reducer/deviceSlice";
import st from "../DeleteType/DeleteType.module.scss";
import Select from "../../../sharedComponents/Select/Select";
import Button from "../../../sharedComponents/Button/Button";

const DeleteBrand = ({onHide}) => {
    const {brands, selectedBrand} = useSelector(state => state.deviceReducer)
    const dispatch = useDispatch()
    const deleteBrand = () => {
        removeBrand({id: selectedBrand.id}).then(() => {
            dispatch(setSelectedBrand(null))
            onHide()
        })
    }
    return (
        <div className={st.deleteType}>
            <div className={st.deleteType__head}>
                <div className={st.deleteType__head_title}>
                    delete brand
                </div>
            </div>
            <div className={st.deleteType__body}>
                <form>
                    select brand: <Select options={brands} set={setSelectedBrand}/>
                </form>
            </div>
            <div className={st.deleteType__footer}>
                <Button
                    onClick={onHide}
                    width={200}
                    height={42}
                > Close</Button>
                <Button
                    onClick={deleteBrand}
                    width={200}
                    height={42}
                    bgColor='#a72626'
                >Delete </Button>
            </div>
        </div>
    );
};

export default DeleteBrand;