import { useState } from "react"
import "./MiCatalogo.css"

const MiCatalogo= (props)=>{
    //estado - hooks
    //useState
    //const [nombreVAriable,funcionActualiza] = useState(valorInicial) useState sirve para guardor la informacion de los inputs o login
    //nombre[nombre, actualizarNombre] = useState()
    console.log(props)
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="mi__Catalogo">
        <h3 className="titulo__miCatalogo">Mi Catalogo</h3>
        <img src="/img/anadir.png" alt="añadir" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiCatalogo