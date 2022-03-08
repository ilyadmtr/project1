import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'toolkit',
    initialState:{
      isAuth:false,
        user:{},
    },
    reducers:{

    }
})

export default userSlice.reducer
export const {} = userSlice.actions