import React from 'react';
import st from './DeleteType.module.scss'
import Button from "../../../sharedComponents/Button/Button";
import Select from "../../../sharedComponents/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType} from "../../../store/reducer/deviceSlice";
import {removeType} from "../../../api/deviceAPI";

const DeleteType = ({onHide}) => {
    const {types, selectedType} = useSelector(state => state.deviceReducer)
    const dispatch = useDispatch()
    const deleteType = () => {
        removeType({id: selectedType.id}).then(() => {
            dispatch(setSelectedType(null))
            onHide()
        })

    }
    return (
        <div className={st.deleteType}>
            <div className={st.deleteType__head}>
                <div className={st.deleteType__head_title}>
                    delete type
                </div>
            </div>
            <div className={st.deleteType__body}>
                <form>
                    select type: <Select options={types} set={setSelectedType}/>
                </form>
            </div>
            <div className={st.deleteType__footer}>
                <Button
                    onClick={onHide}
                    width={200}
                    height={42}
                > Close</Button>
                <Button
                    onClick={deleteType}
                    width={200}
                    height={42}
                    bgColor='#a72626'
                >Delete </Button>
            </div>
        </div>
    );
};

export default DeleteType;