import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    types: [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартфони'},
    ],
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
    ],
    devices:[
        {id: 1, name: 'Iphone 12 pro',price:25000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 2, name: 'Iphone 12 pro',price:25000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 3, name: 'Iphone 12 pro',price:25000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 4, name: 'Iphone 12 pro',price:25000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 5, name: 'Iphone 12 pro',price:25000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
    ]
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
    }
})

export default userSlice.reducer
export const {setTypes, setBrands,setDevices} = userSlice.actions