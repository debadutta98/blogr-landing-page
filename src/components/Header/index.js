import NavBar from "./NavBar";

export default function Header() {
    return <header>
        <NavBar />
        <div className="banner">
            <div className="banner__title">
                <h1>A modern publishing platform</h1>
                <span>Grow your audience and build your online brand</span>
            </div>
            <div className="banner__btn-container">
                <button>Start for Free</button>
                <button>Learn More</button>
            </div>
        </div>
    </header>
}