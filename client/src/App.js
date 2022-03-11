import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import './assets/scss/style.scss'
import {check} from "./api/userAPI";
import {useDispatch} from "react-redux";
import {setIsAuth, setUser} from "./store/reducer/userSlice";
import Preloader from "./sharedComponents/Preloader/Preloader";

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        check().then(data => {
            dispatch(setUser(true))
            dispatch(setIsAuth(true))
        }).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
