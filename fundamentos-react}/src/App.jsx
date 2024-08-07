import React, { useEffect, useState } from "react";
import imgPiza from "./assets/images/images.jpg";
import MyButton from "./Components/MyButton";
import WelcomeText from "./Components/WelcomeText";
import MapFrut from "./Components/MapFrut.jsx";

/* nst MyButton = (props) => {
    console.log(props);
    return <button>{props.text}</button>;
}; */

// const WelcomeText = ({ user }) => {
//     if (user) {
//         return (
//             <div>
//                 <h3>Online</h3>
//             </div>
//         );
//     }
//     return <div>Offline</div>;
// };

const UserName = () => {
    return <h3>Soy marcos y soy el mas gay</h3>;
};

const UserLastname = () => {
    return <h3>Soy marcos y sigo siendo el mas gay</h3>;
};

const Marcos = () => {
    return <h3>No soy gay</h3>;
};

const Todo = (props) => {
    return (
        <li>
            <h3>
                {props.title} {props.completed ? "✅" : "❎"}
            </h3>
        </li>
    );
};

const App = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => response.json())
            .then((json) => {
                setTodos(json);
            });
    };

    useEffect(() => {
        getTodos();
    }, []);

    const title = "Este es un titulo desde una constante";
    const textCss = "text-center";
    const pathImg = "./src/assets/images/images.jpg";
    const user = true;
    const user2 = false;
    const fruts = ["🥝", "🍓", "🍌", "🍅"];
    const numeros = [10, 20, 30, 40];

    // console.log(todos);
    return (
        <React.Fragment>
            <h1 className={textCss}>Hola soy React</h1>
            <h2>{title.toUpperCase()}</h2>
            <img src={imgPiza} alt="aca va una foto de una pizza" />
            <MyButton text="boton 1" />
            <MyButton text="boton 2" />
            <MyButton text="boton 3" />
            {user ? <UserName /> : <UserLastname />}
            <WelcomeText user={user} />
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

            <MapFrut fruts={fruts} />

            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero * 1.2}</li>
                ))}
            </ul>
            <ul>
                {todos.map((todo) => (
                    <Todo
                        title={todo.title}
                        completed={todo.completed}
                        key={todo.id}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default App;
