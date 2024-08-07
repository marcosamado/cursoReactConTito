import ItemFrut from "./ItemFrut";

const MapFrut = ({ fruts }) => {
    return (
        <ul>
            {fruts.map((fruit, index) => (
                <ItemFrut fruit={fruit} key={index} />
            ))}
        </ul>
    );
};

export default MapFrut;
