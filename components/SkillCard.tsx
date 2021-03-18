import React from 'react'
import style from '../styles/SkillCard.module.css'
import Tilt from 'react-tilt'

export default function SkillCard(props) {
    return (
        <Tilt className={style.tilt} options={{ max: 60, reset: true, scale: 1.1,  gyroscope: true, gyroscopeMinAngleX:-45, gyroscopeMaxAngleX:45, gyroscopeMinAngleY:-45, gyroscopeMaxAngleY:45 }}  >
            <div className={style.body} >
                <img src={props.img} alt="" />
                <h1>{props.skill}</h1>
                <p>{props.nv}</p>
            </div>
        </Tilt>
    )
}



