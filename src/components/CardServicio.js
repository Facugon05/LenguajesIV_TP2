import React from 'react';
import './CardServicio.css';

function CardServicio ({titulo, imagen, descripcion}){
    return(
        <>
        <section className='card-servicio'>
            <div className='card-zona-img-servicio'>
                <img src={imagen} alt={titulo} className='card-imagen-servicio'/>
            </div>
            <h4>{titulo}</h4>
            <p>{descripcion}</p>
        </section>
        </>
    );
}

export default CardServicio;