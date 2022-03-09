import React from 'react';
import st from './DevicePage.module.scss'
import Button from "../../sharedComponents/Button/Button";

const DevicePage = () => {

    const device = {
        id: 1, name: 'Iphone 12 pro',
        price: 1000, rating: 5,
        img: `https://n1s1.hsmedia.ru/00/07/3b/00073b44cbcc628624197c16b01a91a0/728x1294_1_2052739535b7028fbe538a7278ecd7c8@1152x2048_0xac120003_19331758041591010989.jpg`
    }

    const description = [
        {id: 1, title: 'Оперативная память', description: '5гб'},
        {id: 2, title: 'Оперативная память', description: '5гб'},
        {id: 3, title: 'Камера ', description: '12 мп'},
        {id: 4, title: 'Камера ', description: '12 мп'},
        {id: 5, title: 'Процессор', description: 'Пентиум 3'},
        {id: 6, title: 'Процессор', description: 'Пентиум 3'},
        {id: 7, title: 'Кол-во ядер', description: '2'},
        {id: 8, title: 'Кол-во ядер', description: '2'},
        {id: 9, title: 'Аккумулятор', description: '4000'},
        {id: 10, title: 'Аккумулятор', description: '4000'},
        ]

    return (
        <div className={`_container`}>
            <div className={st.devicePage}>
                <div className={st.devicePage__block}>
                    <img src={device.img} alt={device.name}/>
                </div>
                <div className={st.devicePage__block}>
                    <h2 className={st.devicePage__block_title}>
                        {device.name}
                    </h2>
                    <div className={st.devicePage__block_img}>
                        <span>{device.rating}</span>
                    </div>
                </div>
                <div className={st.devicePage__block}>
                    <div className={st.devicePage__block_card}>
                        <div className={st.devicePage__block_card__price}>
                            {device.price} $
                        </div>
                        <Button
                            width={200}
                            height={48}
                            bgType={true}
                        >
                            add to basket
                        </Button>
                    </div>
                </div>
            </div>
            <div className={st.characteristic}>
                <h1 className={st.characteristic__title}>characteristic</h1>
                {description.map((info)=>
                    <div
                        key={info.id}
                        className={st.characteristic__line}>
                        {info.title} : {info.description}
                    </div>
                 )}
            </div>

        </div>
    );
};

export default DevicePage;