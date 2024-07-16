import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    
    // const secciones = [
    //     "Pulseras",
    //     "Collares",
    //     "Aretes",
    //     "Anillos"
    // ]

    const manejarCambio =(e) => {
      console.log("cambio", e.target.value)
      props.actualizarSecciones(e.target.value)
    }

    return <div className="lista_opciones">
        <label>Secciones</label>
        <select value={props.valor} onChange={manejarCambio}> {/*este es para que el select quede con la etiqueda de abajo "Selecciona categoria"*/}
          <option value="" disable defaultValue="" hidden>Selecciona categoria</option>
          {props.secciones.map((secciones, index) => {
            return <option key={index} value={secciones}>{secciones}</option>
          })}
        </select>
        
    </div>
    //<div>
    //<select>
    // {secciones.map((secciones, index) => <option key={index}>{secciones}</option>)}
    // </select>
    //</div>
}
export default ListaOpciones