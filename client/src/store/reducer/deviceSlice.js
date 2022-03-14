import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    types: [],
    brands: [],
    devices:[],
    selectedType:{},
    selectedBrand:{},
    page:1,
    totalCount:0,
    limit:3,
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
            state.page=1
            state.selectedType = action.payload
        },
        setSelectedBrand(state,action){
            state.page=1
            state.selectedBrand = action.payload
        },
        setPage(state,action){
            state.page = action.payload
        },
        setTotalCount(state,action){
            state.totalCount = action.payload
        },
        setLimit(state,action){
            state.limit = action.payload
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
    setPage,
    setTotalCount,
    setLimit,
} = userSlice.actions