import "./MiCatalogoCards.css"
import Imagenes from "../ImagenesCatalogo"

const MiCatalogoMain = (props) => {
//destructuracion, una forma mas simple
//const {colorPrimario, colorSecundario, titulo} = props.datos
const {nuevasImagenes,eliminarImagen,id} = props

    return <> 
        {nuevasImagenes.length > 0 &&
            <section className="tituloCatalogoMain" style={{backgroundColor: props.datos.colorSecundario}}>
                <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
                <div className="contenedorCatalogoMain">
                    {
                        nuevasImagenes.map((nuevaImagen, index) => <Imagenes 
                            datos={nuevaImagen} 
                            key={index} 
                            colorPrimario={props.datos.colorPrimario}
                            eliminarImagen={eliminarImagen}
                        />)
                    } 
                </div>
            </section>
        }
    </>
}

export default MiCatalogoMain