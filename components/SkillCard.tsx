import React from 'react'
import style from '../styles/SkillCard.module.css'
import Tilt from 'react-parallax-tilt'

export default function SkillCard(props) {
    return (
        <Tilt reset={false} gyroscope={true} tiltMaxAngleX={20} tiltMaxAngleY={0} className={style.tilt} >
            <div className={style.body} >
                <img src={props.img} alt="" />
                <h1>{props.skill}</h1>
                <p>{props.nv}</p>
            </div>
        </Tilt>
    )
}



