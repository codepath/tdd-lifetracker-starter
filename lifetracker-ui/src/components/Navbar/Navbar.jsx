import * as React from "react";
import "./Navbar.css";
import logo from "src/components/Navbar/Logo.png";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";


export default function Navbar() {
    console.log(logo);
    return (
        <nav className="Navbar">
            <Link to="/" className="logo">
                <img src={logo} width="60px" alt="Website logo" />
            </Link>
            <NavLinks loggedIn={false}/>
        </nav>
    );
}
