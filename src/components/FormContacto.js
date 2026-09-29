import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./FormContacto.css";

function FormContacto() {
    const [estadoEnvio, setEstadoEnvio] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            nombre: "",
            apellido: "",
            email: "",
            mensaje:"",
        },
    });

    const mensaje = watch("mensaje", "");

    async function enviarFormulario(datos){
        setEstadoEnvio("");
        
        try{
            await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${datos.nombre.trim()} ${datos.apellido.trim()}`,
          from_email: datos.email.trim(),
          reply_to: datos.email.trim(),
          message: datos.mensaje.trim(),
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        });
        reset();
      setEstadoEnvio("El mensaje se envió correctamente.");
    } catch {
      setEstadoEnvio("No se pudo enviar el mensaje. Intente nuevamente.");
    }}


    return(
        <>
            <main className="contact-page">
                <section className="contact-panel">
                    <h1>Contacto</h1>
                    <p className="contact-intro">
                    Completá el formulario para enviarnos tu consulta.
                    </p>

                    <form
                    className="contact-form"
                    onSubmit={handleSubmit(enviarFormulario)}
                    noValidate
                    >
                    <div className="contact-name-fields">
                        <label>
                        Nombre
                        <input
                            type="text"
                            placeholder = "Ej: Esteban"
                            autoComplete="given-name"
                            aria-invalid={Boolean(errors.nombre)}
                            {...register("nombre", {
                            required: "Ingresá tu nombre.",
                            validate: (valor) =>
                                valor.trim().length > 0 ||
                                "El nombre no puede estar vacío.",
                                pattern:{
                                    value: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/,
                                    message: "El nombre solo puede contener letras y espacios.",
                                },
                            })}
                        />
                        {errors.nombre && (
                            <span className="field-error">{errors.nombre.message}</span>
                        )}
                        </label>

                        <label>
                        Apellido
                        <input
                            type="text"
                            placeholder = "Ej: Gonzalez"
                            autoComplete="family-name"
                            aria-invalid={Boolean(errors.apellido)}
                            {...register("apellido", {
                            required: "Ingresá tu apellido.",
                            validate: (valor) =>
                                valor.trim().length > 0 ||
                                "El apellido no puede estar vacío.",
                                pattern:{
                                    value: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/,
                                    message: "El apellido solo puede contener letras y espacios.",
                                },
                            })}
                        />
                        {errors.apellido && (
                            <span className="field-error">
                            {errors.apellido.message}
                            </span>
                        )}
                        </label>
                    </div>

                    <label>
                        Correo electrónico
                        <input
                        type="email"
                        placeholder = "Ej: correo@mail.com"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        {...register("email", {
                            required: "Ingresá tu correo electrónico.",
                            pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ingresá un correo electrónico válido.",
                            },
                        })}
                        />
                        {errors.email && (
                        <span className="field-error">{errors.email.message}</span>
                        )}
                    </label>

                    <label>
                        Mensaje
                        <textarea
                        rows="6"
                        placeholder = "ingresá aquí tu mensaje"
                        maxLength={300}
                        aria-invalid={Boolean(errors.mensaje)}
                        {...register("mensaje", {
                            required: "Escribí un mensaje.",
                            validate: (valor) =>
                            valor.trim().length > 0 ||
                            "El mensaje no puede estar vacío.",
                            maxLength: {
                            value: 300,
                            message: "El mensaje no puede superar los 300 caracteres.",
                            },
                        })}
                        />

                        {errors.mensaje ? (
                        <span className="field-error">{errors.mensaje.message}</span>
                        ) : (
                        <span className="character-count">
                            {mensaje.length}/300 caracteres
                        </span>
                        )}
                    </label>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </button>

                    {estadoEnvio && (
                        <p className="form-status" role="status">
                        {estadoEnvio}
                        </p>
                    )}
                    </form>
                </section>
            </main>
        </>
    );
}

export default FormContacto;