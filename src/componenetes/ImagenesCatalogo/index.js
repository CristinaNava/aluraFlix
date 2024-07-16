import "./ImagenesCatalogo.css"
import { RiDeleteBin2Fill } from "react-icons/ri";


const Imagenes = (props) => {

    const {titulo,nombreQuienPublica,imagen,secciones,id} = props.datos
    const {colorPrimario,eliminarImagen} = props

    return <div className="imagen__catalogo">
        <RiDeleteBin2Fill className="eliminar" onClick={() =>eliminarImagen(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={imagen} alt={titulo}/>
        </div>
        <div className="info">
            <h4>{titulo}</h4>
            <h5>{nombreQuienPublica}</h5>

        </div>
    </div>
}

export default Imagenes