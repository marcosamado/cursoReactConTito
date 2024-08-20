import { useState } from "react";

const Controlado = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        state: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // document.addEventListener("submit", (evento) => {
    //     evento.preventDefault();
    // });

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="Text"
                placeholder="Ingrese la tarea"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={(e) => {
                    setTodo({ ...todo, title: e.target.value });
                }}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese la descripcion"
                name="description"
                value={todo.description}
                onChange={(e) => {
                    setTodo({ ...todo, description: e.target.value });
                }}
            />
            <select
                className="form-select mb-2"
                name="state"
                value={todo.state}
                onChange={(e) => {
                    setTodo({ ...todo, state: e.target.value });
                }}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Procesar
            </button>
        </form>
    );
};

export default Controlado;
