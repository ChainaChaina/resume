
import ProfileCard from '../components/ProfileCard.tsx'
import style from '../styles/Home.module.css'
import SkillCard from '../components/SkillCard.tsx'


export default function Home() {
  return (
    <div>
      <div className={style.containerProfile}>
        <ProfileCard></ProfileCard>
      </div>
      <svg className={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#040e1d" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,192C192,171,240,149,288,160C336,171,384,213,432,202.7C480,192,528,128,576,128C624,128,672,192,720,234.7C768,277,816,299,864,266.7C912,235,960,149,1008,144C1056,139,1104,213,1152,218.7C1200,224,1248,160,1296,144C1344,128,1392,160,1416,176L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg>
      <div className={style.siteBody}>
        <SkillCard skill="JS" nv="Bom, usado em quase todo projeto." img="https://pcodinomebzero.neocities.org/Imagens/javascript1.png"></SkillCard>
        <SkillCard skill="React" nv="Tecnologia popular aqui no Brasil. Usado neste site!" img="https://cdn.auth0.com/blog/react-js/react.png"></SkillCard>
        <SkillCard skill="Angular" nv="Framework que trabalho hoje em dia na Yooga. Criamos um ERP leve e descomplicado." img="https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png"></SkillCard>
        <SkillCard skill="Vue" nv="Usado na criação de um front de sistema de notas fiscais." img="https://masteringjs.io/assets/images/vue/vue.png"></SkillCard>
        <SkillCard skill="HTML" nv="O Inicio de muitos, inclusive o meu." img="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"></SkillCard>
        <SkillCard skill="CSS" nv='Linguagem que mais gosto de quebrar a cabeça ajeitando as coisas. ' img="https://diegomariano.com/wp-content/uploads/2020/08/logo-2582747_640-e1597771254582.png"></SkillCard>
      </div>
    </div>
  )
}
