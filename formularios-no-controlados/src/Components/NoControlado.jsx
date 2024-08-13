import React, { useRef } from "react";

const NoControlado = () => {
    // const form = document.querySelector("#form");  modificando el dom real

    const form = useRef(null); //modificando el dom virtual atraves de react y cada vez que necesitoms hacer una referencia al dom, usamos useRef

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("me diste click re qleao");
        const data = new FormData(form.current);
        //console.log(...data.entries());

        const dataObject = Object.fromEntries([...data.entries()]);
        console.log(dataObject);
    };

    // document.addEventListener("submit", (evento) => {
    //     evento.preventDefault();
    // });

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="Text"
                placeholder="Ingrese la tarea"
                className="form-control mb-2"
                name="title"
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese la descripcion"
                name="description"
            />
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Procesar
            </button>
        </form>
    );
};

export default NoControlado;
