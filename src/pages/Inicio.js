import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PiePagina from "../components/PiePagina";
import CardPersonaje from '../components/CardPersonaje';
import './Inicio.css';


function Inicio() {

    const [character,setCharacter]=useState([]);
    useEffect(()=>{
        axios.get("https://dragonball-api.com/api/characters")
        .then(Valores=>setCharacter(Valores.data.items))
    }, []);

    return(
        <>
            <section className='page-inicio'>
                <h1>Inicio</h1>
                <strong>Bienvenido. A continuación podrás ver a algunos personajes obtenidos de la Dragonball API</strong>

                <div className='cards-personajes'>
                    {
                        character.map((personaje)=>(
                            <CardPersonaje 
                            key={personaje.id}
                            nombre={personaje.name}
                            ki={personaje.ki}
                            raza={personaje.race}
                            genero={personaje.gender}
                            afiliacion={personaje.affiliation}
                            imagen={personaje.image}
                            />
                        ))
                    }
                </div>

                <PiePagina/>
            </section>
        </>
    );
}

export default Inicio;
