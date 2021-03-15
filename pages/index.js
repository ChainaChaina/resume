import Head from 'next/head'
import ProfileCard from '../components/ProfileCard.tsx'
import style from '../styles/Home.module.css'
import SkillCard from '../components/SkillCard.tsx'



export default function Home() {
  return (
    <div>
      <div className={style.container}>
        <ProfileCard></ProfileCard>
      </div>
      <svg className={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#040e1d" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,192C192,171,240,149,288,160C336,171,384,213,432,202.7C480,192,528,128,576,128C624,128,672,192,720,234.7C768,277,816,299,864,266.7C912,235,960,149,1008,144C1056,139,1104,213,1152,218.7C1200,224,1248,160,1296,144C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg>
      <div className={style.spacer}>
        aa
      </div>
      <div className={style.siteBody}>
        {/* <div className={style.spacer}> */}
        <SkillCard skill ="JS" nv="Bom, usado em quase todo projeto" img = "https://pcodinomebzero.neocities.org/Imagens/javascript1.png"></SkillCard>
        <SkillCard skill ="React" nv="Tecnologia que mais estudo hoje em dia. Usei neste site! " img = "https://cdn.auth0.com/blog/react-js/react.png"></SkillCard>
        <SkillCard skill ="Vue" nv="Estágiei usando a tecnologia" img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"></SkillCard>
        <SkillCard skill ="Python" nv="Criei dois bots usando a linguagem" img = "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67"></SkillCard>
        <SkillCard skill ="MongoDB" nv="Banco de preferência que tenho mais costume" img = "https://bognarjunior.files.wordpress.com/2015/05/thumb.png?w=250"></SkillCard>
        <SkillCard skill ="HTML" nv="O Inicio de muitos, inclusive o meu" img = "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"></SkillCard>
        <SkillCard skill ="CSS" nv='"Por favor pare de usar table para criar sites"' img = "https://diegomariano.com/wp-content/uploads/2020/08/logo-2582747_640-e1597771254582.png"></SkillCard>
        <SkillCard skill ="MySQL" nv="Faço algumas linhas no meu emprego atual" img = "https://devtools.com.br/blog/wp-content/uploads/2013/06/MySQL-Logo.wine_.png"></SkillCard>
        {/* </div> */}
      </div>
    </div>
  )
}
