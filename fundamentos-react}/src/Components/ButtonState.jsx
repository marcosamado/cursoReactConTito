import React, { useState } from "react";

const ButtonState = () => {
    // se identifica que count es el estado y setCount es el que modifica el estado

    const [count, setCount] = useState(0);
    // se inicializa en 0 en useState y el 0 se desestructura y se le pone count.
    const handleClick = () => {
        //setCount se llama y modifica el estado de count
        setCount(count + 1);
        console.log(count);
    };
    // el evento onClick llama a la funcion handleClick que modifica el estado de count mediante useState.
    return <button onClick={handleClick}>Boton:{count}</button>;
};

export default ButtonState;
