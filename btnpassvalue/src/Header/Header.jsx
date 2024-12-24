import reactimg from "../assets/react.svg"


const reactDescription = ["Fundamental", " Curial", " Core"];


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
    const randomvalues = reactDescription[getRandomInt(2)]
    return (
        <header>
            <img src={reactimg} alt="React JS" />
            <h1>React Essentials</h1>
            <p>{randomvalues} react concept you will need for almot any you are going ro build!</p>
        </header>)
}