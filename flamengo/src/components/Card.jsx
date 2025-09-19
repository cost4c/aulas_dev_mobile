import img_perfil from "../assets/cr7.jpg"
import './Card.css'


export default function Card(props){// quero posteriormente passar props de imagens
    return <>
    <img className="rounded" src={img_perfil} alt="" width={500} />
        <h1>amo meu barbeiro !!!</h1>
    </>
}