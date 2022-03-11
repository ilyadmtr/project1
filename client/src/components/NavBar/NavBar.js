import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import st from './NavBar.module.scss'
import Button from "../../sharedComponents/Button/Button";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {setIsAuth, setUser} from "../../store/reducer/userSlice";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const NavBar = () => {
    const {isAuth} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(setUser({}))
        dispatch(setIsAuth(false))
    }

    return (
        <div className={st.navbar}>
            <NavLink to={SHOP_ROUTE} className={st.navbar__logo}>
                BuyDevice
            </NavLink>

            <SwitchTransition mode='out-in'>
                <CSSTransition
                    key={isAuth}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    {isAuth
                        ? <nav
                            className={st.navbar__link}
                        >
                            <NavLink to={ADMIN_ROUTE} className='btn'>
                                <Button width={200} height={48}>
                                    Admin Panel
                                </Button>
                            </NavLink>
                            <NavLink to={SHOP_ROUTE} className='btn'>
                                <Button width={200}
                                        height={48}
                                        onClick={logOut}
                                        bgColor='#a72626'
                                >
                                    log out
                                </Button>
                            </NavLink>
                        </nav>
                        : <nav
                            className={st.navbar__link}
                        >
                            <NavLink to={LOGIN_ROUTE} className='btn'>
                                <Button
                                    width={160}
                                    height={48}
                                >
                                    log in
                                </Button>
                            </NavLink>
                        </nav>
                    }
                </CSSTransition>
            </SwitchTransition>

        </div>
    );
};

export default NavBar;