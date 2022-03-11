import React, {useState} from 'react';
import st from './Auth.module.scss'
import Input from "../../sharedComponents/Input/Input";
import Button from "../../sharedComponents/Button/Button";
import {NavLink, useLocation,useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, registration} from "../../api/userAPI";
import {useDispatch} from "react-redux";
import {setIsAuth, setUser} from "../../store/reducer/userSlice";

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()

    const click = async (e) => {
        e.preventDefault()
        try {
            let user
            if (isLogin){
                user = await login(email, password)

            }else{
                user = await registration(email,password)
            }
            dispatch(setUser(user))
            dispatch(setIsAuth(true))
            navigate(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <div className={`_container ` + st.auth}>
            <div className={st.auth__card}>
                <div className={st.auth__card__title}>
                    {isLogin ? 'authorization' : 'Sign Up'}
                </div>
                <form action="" className={st.auth__form}>
                    <Input
                        type="email"
                        placeholder='enter your e-mail'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder='enter your password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <div className={st.auth__form_block}>
                        {isLogin
                            ? <div className="">
                                Don`t you have account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                            </div>
                            : <div className="">
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Log In!</NavLink>
                            </div>
                        }

                        <Button
                            width={160}
                            height={48}
                            bgType={true}
                            onClick={e=>click(e)}
                        >
                            {isLogin
                                ? ' log in'
                                : 'Sign Up'
                            }
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Auth;