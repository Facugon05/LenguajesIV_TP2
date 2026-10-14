import React        from 'react'
import PiePagina    from "../components/PiePagina";
import CardServicio from '../components/CardServicio';
import './Servicios.css';

const servicios = [{
    titulo: "HTML5",
    imagen: "https://cdn.simpleicons.org/html5/E34F26",
    descripcion: "Lenguaje de marcado estándar para la creación y estructuración de páginas web."
    },
    {
    titulo:"JavaScript",
    imagen:"https://cdn.simpleicons.org/javascript/F7DF1E",
    descripcion:"Lenguaje de programación principal para el desarrollo web del lado del cliente."
    },
    {
    titulo:"CSS",
    imagen:"https://cdn.simpleicons.org/css/663399",
    descripcion:"Lenguaje utilizado para dar estilo visual, color, tipografía y diseño responsivo a las páginas web."
    },
    {
    titulo:"React",
    imagen:"https://cdn.simpleicons.org/react/61DAFB",
    descripcion:"Librería orientada al desarrollo de interfaces de usuario interactivas mediante una arquitectura basada en componentes."
    },
    {
    titulo:"Git",
    imagen:"https://cdn.simpleicons.org/git/F05032",
    descripcion:"Sistema de control de versiones que facilita la gestión del historial y el resguardo del código fuente."
    },
    {
    titulo:"GitHub",
    imagen:"https://cdn.simpleicons.org/github/181717",
    descripcion:"Plataforma en la nube basada en Git que facilita la gestión colaborativa, el alojamiento y el resguardo del código fuente."
    }]

function Servicios() {

    return(
        <>
            <section className='page-servicios'>
                <h1>Servicios</h1>
                <div className='cards-servicios'>
                    {
                        servicios.map((servicio)=>(
                            <CardServicio
                            key={servicio.titulo}
                            titulo={servicio.titulo}
                            imagen={servicio.imagen}
                            descripcion={servicio.descripcion}
                            />
                        ))
                    }
                </div>

                <PiePagina/>
            </section>
        </>
    );
}

export default Servicios;