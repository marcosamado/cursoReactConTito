const MyButton = ({ text }) => {
    //console.log(props);
    const handleClickButton = (title) => {
        console.log("me diste click" + title);
    };
    return <button onClick={() => handleClickButton(text)}>{text}</button>;
};

export default MyButton;
