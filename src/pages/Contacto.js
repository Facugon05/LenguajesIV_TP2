import React from 'react'
import PiePagina from "../components/PiePagina";
import FormContacto from "../components/FormContacto";
import './Contacto.css';

function Contacto() {

    return(
        <>
            <main className="contact-page">
                <FormContacto/>
                <section className="contact-map">
                    <h2>Ubicación</h2>
                    <iframe
                        title="Ubicación en el mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28987.822308262443!2d-65.41055269626465!3d-24.74480231611691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc14f9aaaaaab%3A0x69dac60239564277!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e0!3m2!1ses!2sar!4v1791868121221!5m2!1ses!2sar"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </section>
            </main>
            <PiePagina/>
        </>
    );
}

export default Contacto;