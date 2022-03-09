import React, {useEffect, useRef} from 'react';
import st from './ParallaxImage.module.scss';

const ParallaxImage = ({src, alt}) => {
    const bg = useRef()
    let deltaX, deltaY
    useEffect(() => {
        const el = bg.current
        const elX = el.getBoundingClientRect().left
        const elY = el.getBoundingClientRect().top
        deltaX = elX / window.innerWidth
        deltaY = elY / window.innerHeight
    }, [])
    return (
        <div className={st.deviceItem__img}>
            <div
                ref={bg}
                className={st.deviceItem__img_par}
                onMouseMove={(e) => {
                    const el = bg.current
                    const x = e.pageX / window.innerWidth - deltaX;
                    const y = e.pageY / window.innerHeight - deltaY;
                    el.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
                }}
            >
                <img src={src} alt={alt}/>
            </div>
        </div>
    );
};

export default ParallaxImage;