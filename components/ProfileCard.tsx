import React from 'react'
import style from '../styles/ProfileCard.module.css'
import Tilt from 'react-parallax-tilt'

export default function ProfileCard() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

    return (
        <Tilt reset={false} className={style.tilt} gyroscope={true} tiltMaxAngleX={0} tiltMaxAngleY={20}>
            <span className={style.spanClick}>Github!</span>
            <div onClick={() => openInNewTab('https://github.com/ChainaChaina')} className={style.container}>
                <img src="https://avatars.githubusercontent.com/u/26202552?v=4" alt="" />
                <h1>Lucas Borges</h1>
                <p>27 anos</p>
                <p>Desenvolvedor Frontend</p>
                <span className={style.subText}>Frontend no mercado, fullstack das meus próprios projetos e jogos.</span>
            </div>
        </Tilt>
    )
}



