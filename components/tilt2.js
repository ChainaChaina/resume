import React from 'react'
import style from '../styles/SkillCard.module.css'
import Tilt from 'react-parallax-tilt'

export default function Tilt2(props) {
    return (
        <Tilt className={style.tilt} gyroscope={true} tiltMaxAngleX={30} tiltMaxAngleY={30} >
            <div className={style.body} >
                <img src={props.img} alt="" />
                <h1>{props.skill}</h1>
                <p>{props.nv}</p>
            </div>
        </Tilt>
    )
}