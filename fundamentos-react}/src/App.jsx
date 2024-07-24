import React from "react";

const MyButton = () => {
    return <button>Este buton hace gay a marcos</button>;
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
    const pathImg = "https://picsum.photos/200/300";

    const user = true;
    const user2 = false;

    return (
        <React.Fragment>
            <h1 className={textCss}>Hola soy React</h1>
            <h2>{title.toUpperCase()}</h2>
            <img src={pathImg} alt="aca va una foto" />
            <MyButton />
            {user ? <UserName /> : <UserLastname />}
            {user2 && <Marcos />}
        </React.Fragment>
    );
};

export default App;
