import React from 'react'
import style from '../styles/ProfileCard.module.css'
import Tilt from 'react-parallax-tilt'

export default function ProfileCard() {
    return (
        <Tilt className={style.tilt} gyroscope={true} tiltMaxAngleX={30} tiltMaxAngleY={30} tiltAngleXInitial={-90}>
            <div className={style.container}>
                <img src="https://github.com/chainachaina.png" alt="" />
                <h1>Lucas Borges</h1>
                <p>25 anos</p>
                <p>Frontend wannabe.</p>
                <span className={style.subText}>Eu gosto muito de UI, UX e de desing em geral. Meu objetivo atual é focar em frontend full-time, mas atualmente sou fullstack das minhas próprias invenções.</span>
            </div>
        </Tilt>
    )
}



