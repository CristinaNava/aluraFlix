import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"

const Formulario = (props) => {

    const [titulo,actualizarTitulo] = useState("")
    const [nombreQuienPublica,actualizarNombreQuienPublica] = useState("")
    const [imagen,actualizarImagen] = useState("")
    const [secciones, actualizarSecciones] = useState("")


    const {registarNuevaImagen, agregarCategoria} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo:titulo,
            nombreQuienPublica:nombreQuienPublica,
            imagen:imagen,
            secciones:secciones
        }
        registarNuevaImagen(datosAEnviar)
        //console.log(datosAEnviar)
    }

   
    return  <section className="formulario"> 
            <form onSubmit={manejarEnvio}>
                <h2>Agrega tu imagen</h2>
                <CampoTexto 
                    titulo="Titulo" 
                    placeholder="Ingrese el tutulo" 
                    required 
                    valor={titulo} setValor={actualizarTitulo}
                />
                <CampoTexto 
                    titulo="Nombre de quien publica" 
                    placeholder="Ingrese el nombre" 
                    required 
                    valor={nombreQuienPublica} setValor={actualizarNombreQuienPublica}
                />
                <CampoTexto 
                    titulo="Imagen"
                    placeholder="Ingrese enlace de imagen" 
                    required
                    valor={imagen} setValor={actualizarImagen} 
                />
                <ListaOpciones 
                    valor={secciones} 
                    actualizarSecciones={actualizarSecciones}
                    secciones = {props.secciones}
                />
                <Boton>
                    Crear imagen
                </Boton>
            </form>
    </section>
}

export default Formulario