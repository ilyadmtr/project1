import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    types: [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартфони'},
        {id: 3, name: 'notepad'},
        {id: 4, name: 'mobile'},
        {id: 5, name: 'ipad'},
    ],
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
        {id: 3, name: 'Lenovo'},
        {id: 4, name: 'Acer'},
    ],
    devices:[
        {id: 1, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 2, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 3, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 4, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 5, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 6, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 7, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 8, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 9, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 10, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 11, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 12, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 13, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 14, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 15, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 16, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
        {id: 17, name: 'Iphone 12 pro',price:1000,rating:5,img:`https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`},
    ],
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