import ReactDOM from "react-dom";

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="modal">
            <aside>
                <input id="product" type="checkbox" style={{ display: "none" }} />
                <label for="product">Product</label>
                <ul>
                    <li><a href="#!">Overview</a></li>
                    <li><a href="#!">Pricing</a></li>
                    <li><a href="#!">Marketplace</a></li>
                    <li><a href="#!">Features</a></li>
                    <li><a href="#!">Integrations</a></li>
                </ul>
            </aside>
            <aside>
                <input id="company" type="checkbox" style={{ display: "none" }} />
                <label for="company">Company</label>
                <ul>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Team</a></li>
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Careers</a></li>
                </ul>
            </aside>
            <aside>
                <input id="connect" type="checkbox" style={{ display: "none" }} />
                <label for="connect">Connect</label>
                <ul>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Newsletter</a></li>
                    <li><a href="#!">LinkedIn</a></li>
                </ul>
            </aside>
            <hr/>
            <div className="btn-container">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>, document.getElementById('modal'))
};

export default function NavModal(props) {
    return <>
        {props.show && <Modal />}
    </>;
};