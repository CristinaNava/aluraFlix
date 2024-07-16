import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componenetes/Header/Header';
import Formulario from './componenetes/Formulario/Formulario';
import MiCatalogo from './componenetes/MiCatalogo';
import MiCatalogoMain from './componenetes/MiCatalogoCards';
import Footer from './componenetes/Footer';

console.log(Header)

function App() {

  const[mostrarFormulario,actualizaMostar] = useState(true) //para mostrar ocultar formulario
  const[nuevasImagenes,actualizarNuevasImagenes] = useState([{
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1151391920.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Collares",
    titulo: "Collar de plata, con dije de esmeralda"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1141447676.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Collares",
    titulo: "Collar de plata de 3 cadenas con dije"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1154886440.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Pulseras",
    titulo: "Pulsera de plata con corazon"
  },
  {
    id: uuid(),
    imagen: "https://ss213.liverpool.com.mx/lg/1108567143.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Pulseras",
    titulo: "Pulsera de hilo roja con cuarzo"
  },
  {
    id: uuid(),
    imagen: "https://ss213.liverpool.com.mx/lg/1144902943.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Pulseras",
    titulo: "Pulsera de piedras volcanicas negra con detalle"
  },
  {
    id: uuid(),
    imagen: "https://ss213.liverpool.com.mx/lg/1121553194.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Pulseras",
    titulo: "Pulsera corrdiza de hilo tejida de colores"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1096575412.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Aretes",
    titulo: "Aretes de perlas en forma de gota dorados"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1110710760.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Aretes",
    titulo: "Aretes boquel rosa de plata"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1120138622.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Aretes",
    titulo: "Aretes de chaquira largos colores pastel"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1124098285.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Anillos",
    titulo: "Aretes de chaquira largos colores pastel"
  },
  {
    id: uuid(),
    imagen: "https://ss571.liverpool.com.mx/lg/1110312063.jpg",
    nombreQuienPublica: "Cristina Nava",
    secciones: "Anillos",
    titulo: "Aretes de chaquira largos colores pastel"
  }
])

   //lista de secciones

   const [secciones]= useState([

    {
      id: uuid(),
      titulo:"Pulseras",
      colorPrimario: "#979A9A",
      colorSecundario: "#EBDEF0"
    },
    {
      id: uuid(),
      titulo:"Collares",
      colorPrimario: "#AF7AC5",
      colorSecundario: "#D4E6F1"
    },
    {
      id: uuid(),
      titulo:"Aretes",
      colorPrimario: "#4A235A",
      colorSecundario: "#EDBB99"
    },
    {
      id: uuid(),
      titulo:"Anillos",
      colorPrimario: "#979A9A",
      colorSecundario: "#AF7AC5"
    }
])


  //ternario --> condicion ? seMuestra ; noSemuestra
  //condicion && seMuestra osea {mostrarFormulario && <Formulario />}

  const cambiarMostrar = () => {
    actualizaMostar(!mostrarFormulario)
  }

  //REGISTRAR IMAGEN

  const registarNuevaImagen = (nuevaImagen) => {
    console.log("Nueva Imagen", nuevaImagen)
    //spread operator
    actualizarNuevasImagenes([...nuevasImagenes,nuevaImagen])
  }

  //eliminar imagen

  const eliminarImagen = (id) => {
    console.log("Eliminar colaorador", id)
    const eliminar =nuevasImagenes.filter((nuevaImagen) => {
      return nuevaImagen.id !== id
      
    })
    actualizarNuevasImagenes(eliminar)
  }

 

 
  return (

    <div>
      <Header />
      <MiCatalogo cambiarMostrar={cambiarMostrar}/>
      {mostrarFormulario === true ? <Formulario 
      secciones={secciones.map((secciones) => secciones.titulo)} 
      registarNuevaImagen={registarNuevaImagen}
      /> : <div></div>} 
      
      cambiarMostrar={cambiarMostrar}
      {
        secciones.map((secciones)=> {
          //console.log("Equipo:", seccion)
          return <MiCatalogoMain 
          datos={secciones} 
          key={secciones.titulo} 
          nuevasImagenes= {nuevasImagenes.filter(nuevaImagen => nuevaImagen.secciones === secciones.titulo)} 
          eliminarImagen={eliminarImagen} /*la primera etiqueta puede ser el nomebre que sea y la segunada es la que hace referencia a la funcion elminarImagen*/
          />
        })
      }
      <Footer />

    </div>
  );
}

export default App;
