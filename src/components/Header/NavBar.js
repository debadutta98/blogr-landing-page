import logo from "../../images/logo.svg";
import DropDown from "./DropDown";
export default function NavBar() {
    return <nav>
        <img src={logo} alt="brand name" />
        <div className="dropdown-container">
            <button> Product</button>
            <DropDown list={['Overview','Pricing','Marketplace','Features','Integrations',]} />
        </div>
        <div className="dropdown-container">
            <button> Company</button>
            <DropDown list={['About','Team','Blog','Careers']}/>
        </div>
        <div className="dropdown-container">
            <button> Connect</button>
            <DropDown list={['Contact','Newsletter','LinkedIn']}/>
        </div>
        <div className="auth-nav">
            <button><span>Login</span></button>
            <button><span>Sign Up</span></button>
        </div>
    </nav>
}