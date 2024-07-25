import React from "react";
import imgPiza from "./assets/images/images.jpg";

const MyButton = (props) => {
    console.log(props);
    return <button>{props.text}</button>;
};

const UserName = () => {
    return <h3>Soy marcos y soy el mas gay</h3>;
};

const UserLastname = () => {
    return <h3>Soy marcos y sigo siendo el mas gay</h3>;
};

const Marcos = () => {
    return <h3>No soy gay</h3>;
};

const App = () => {
    const title = "Este es un titulo desde una constante";
    const textCss = "text-center";
    const pathImg = "./src/assets/images/images.jpg";
    const user = true;
    const user2 = false;
    const fruts = ["🥝", "🍓", "🍌", "🍅"];
    const numeros = [10, 20, 30, 40];

    return (
        <React.Fragment>
            <h1 className={textCss}>Hola soy React</h1>
            <h2>{title.toUpperCase()}</h2>
            <img src={imgPiza} alt="aca va una foto de una pizza" />
            <MyButton text="boton 1" />
            <MyButton text="boton 2" />
            <MyButton text="boton 3" />
            {user ? <UserName /> : <UserLastname />}
            {user2 && <Marcos />}
            <ul>
                <li>{fruts[0]}</li>
                <li>{fruts[1]}</li>
                <li>{fruts[2]}</li>
                <li>{fruts[3]}</li>
            </ul>
            <ul>
                {fruts.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <ul>
                {fruts.map((fruit, index) => (
                    <li key={index}>
                        {fruit} - {index}
                    </li>
                ))}
            </ul>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero * 1.2}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default App;
