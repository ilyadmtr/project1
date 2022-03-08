import React from 'react';
import st from './Auth.module.scss'
import Input from "../../sharedComponents/Input/Input";
import Button from "../../sharedComponents/Button/Button";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
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
                    />
                    <Input
                        type="password"
                        placeholder='enter your password'
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