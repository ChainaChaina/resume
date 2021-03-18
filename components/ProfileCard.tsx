import React from 'react'
import style from '../styles/ProfileCard.module.css'


export default function ProfileCard() {
    return (
        <div className={style.container}>
            <img src="https://github.com/chainachaina.png" alt="" />
            <h1>Lucas Borges</h1>
            <p>25 anos</p>

            <p>Frontend wanna be.</p>
            <span className={style.subText}>Eu gosto muito de UI, UX e de desing em geral. Meu objetivo atual é focar em frontend full-time, mas atualmente sou fullstack das minhas próprias invenções.</span>
            
        </div>
    )
}



