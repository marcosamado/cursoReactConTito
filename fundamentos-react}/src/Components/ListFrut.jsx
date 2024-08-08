import ItemFrut from "./ItemFrut";

const ListFrut = ({ fruts }) => {
    return (
        <ul>
            {fruts.map((fruit, index) => (
                <ItemFrut fruit={fruit} key={index} />
            ))}
        </ul>
    );
};

export default ListFrut;
