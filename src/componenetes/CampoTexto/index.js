import { useState } from "react"
import "./CampoTexto.css"


const CampoTexto = (props) => {
   // const [valor,setValor] = useState("")
    //console.log("Datos: ", props)
    const placeholderModificado = `${props.placeholder}....`
    
    const manejarCambio = (e) => {
    //    console.log("cambio",e.target.value)
        props.setValor(e.target.value)
    }
    return <div className="campo_texto">
    
        <label>{props.titulo.toUpperCase()}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
    />
    </div>
}

export default CampoTexto