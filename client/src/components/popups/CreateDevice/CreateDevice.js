import React, {useEffect, useState} from 'react';
import st from './CreateDevice.module.scss';
import Input from "../../../sharedComponents/Input/Input";
import Button from "../../../sharedComponents/Button/Button";
import Select from "../../../sharedComponents/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType, setSelectedBrand, setTypes, setBrands} from "../../../store/reducer/deviceSlice";
import {createDevice, fetchBrands, fetchTypes} from "../../../api/deviceAPI";

const CreateDevice = ({onHide}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const {types, brands, selectedType, selectedBrand} = useSelector(state => state.deviceReducer)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (e, number) => {
        e.preventDefault()
        setInfo(info.filter((i) => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const addDevice = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrand.id)
        formData.append('typeId', selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }
    return (
        <div className={st.popupDevice}>
            <div className={st.popupDevice__head}>
                <div className={st.popupDevice__head_title}>
                    add Device
                </div>
            </div>
            <div className={st.popupDevice__body}>
                <div className={st.popupDevice__form}>
                    <div>
                        select type: <Select
                        options={types}
                        set={setSelectedType}
                    />
                    </div>
                    <div>
                        select brand: <Select
                        options={brands}
                        set={setSelectedBrand}
                    />
                    </div>
                    <Input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type='text'
                        placeholder='Enter device name'/>
                    <Input
                        onChange={(e) => setPrice(Number(e.target.value))}
                        value={price}
                        type='number'
                        placeholder='Enter device price'/>
                    <Input
                        onChange={e => setFile(e.target.files[0])}
                        type='file'
                        placeholder='Enter device name'/>

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
                                    <Input
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        type='text'
                                        placeholder='Enter value name'/>
                                    <Input
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        type='text'
                                        placeholder='Enter value description'/>
                                    <Button
                                        width={120}
                                        height={42}
                                        bgColor='#a72626'
                                        onClick={(e) => removeInfo(e, i.number)}
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
                <Button onClick={addDevice} width={200} height={42}>ADD </Button>
            </div>
        </div>
    );
};

export default CreateDevice;