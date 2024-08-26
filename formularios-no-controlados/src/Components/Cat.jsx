import React, { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({
        name: "titogato",
        edad: 4,
    });

    const { name, edad } = cat;

    const handleAdd = () => {
        setCat({ ...cat, edad: edad + 1 });
        // setCat((prev) => ({...prev, edad: edad + 1)); callback
    };

    return (
        <div>
            <h2>{cat.name}</h2>
            <h2>{cat.edad}</h2>
            <button onClick={handleAdd} className="btn btn-danger mb-2">
                Añadir edad
            </button>
        </div>
    );
};

export default Cat;
