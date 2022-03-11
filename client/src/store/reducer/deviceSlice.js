import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    types: [],
    brands: [],
    devices:[],
    selectedType:{},
    selectedBrand:{},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTypes(state, action) {
            state.types = action.payload
        },
        setBrands(state, action) {
            state.brands = action.payload
        },
        setDevices(state, action) {
            state.devices = action.payload
        },
        setSelectedType(state,action){
            state.selectedType = action.payload
        },
        setSelectedBrand(state,action){
            state.selectedBrand = action.payload
        },
    }
})

export default userSlice.reducer
export const {
    setTypes,
    setBrands,
    setDevices,
    setSelectedType,
    setSelectedBrand,
} = userSlice.actions