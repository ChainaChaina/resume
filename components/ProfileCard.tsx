import React from 'react'
import Tilt from 'react-tilt'
import style from '../styles/ProfileCard.module.css'


export default function ProfileCard() {
    return (
        <div className={style.container}>
            <img src="https://github.com/chainachaina.png" alt="" />
            <h1>Lucas Borges</h1>
            <p>25 anos</p>

            <p>Frontend wanna be.</p>
            <p className={style.subText}>Eu gosto muito de UI, UX e de desing em geral. Meu objetivo atual é focar em frontend full-time, mas eu também sei um pouco de back</p>
            
        </div>
    )
}



