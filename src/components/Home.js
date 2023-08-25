import './Home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            <h2>The Ancient Game of</h2>
            <h1>Ur</h1>
            <div className="home-menu">
                <MenuButton label={'Single Player'} onClick={() => { }} />
                <MenuButton label={'Local Multiplayer'} onClick={() => { }} />
                <MenuButton label={'Online Multiplayer'} onClick={() => { }} />
            </div>
        </div>
    )
}

function MenuButton({ label, onClick }) {
    return (
        <button className="menu-button" onClick={() => onClick()}>{label}</button>
    );
}