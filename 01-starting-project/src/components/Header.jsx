import reactImg from '../assets/react-core-concepts.png';

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const reactDesc = ['Fundamental', 'Crucial', 'Core'];

export default function Header() {
    const desc = reactDesc[genRandomInt(1)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {desc} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    );
}