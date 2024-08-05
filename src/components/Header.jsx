import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header-logo">
                <img
                    className="header-logo-image"
                    src="/logo.png"
                    alt="HRnet Logo"
                />
            </NavLink>
            <div className="header-details">
                <h1 className="header-details-title">WEALTH HEALTH - HRnet</h1>
                <NavLink className="header-details-link" to="/employees-list"> View Current Employees </NavLink>
            </div>
        </header>
    );
}
export default Header;