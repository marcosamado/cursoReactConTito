import React from "react";
import Controlado from "./Components/Controlado";
import Cat from "./Components/Cat";

const App = () => {
    return (
        <div className="container">
            <h1>Formulario</h1>
            <Cat />
            <Controlado />
        </div>
    );
};

export default App;
