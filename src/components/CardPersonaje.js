import React from 'react';
import './CardPersonaje.css';

function CardPersonaje({nombre, ki, raza, genero, afiliacion, imagen}){
    return(
        <>
        <section className='card-personaje'>
            <div className='card-zona-img-personaje'>
                <img src={imagen} alt={nombre} className='card-imagen-personaje'/>
            </div>
            <h4>{nombre}</h4>
            <p>Ki: {ki}</p>
            <p>Raza: {raza}</p>
            <p>Género: {genero}</p>
            <p>Afiliación: {afiliacion}</p>
        </section>
        </>
    );
}


export default CardPersonaje;