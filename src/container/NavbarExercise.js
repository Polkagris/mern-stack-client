import React from 'react';
import {
    Link
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../styles/navbar.css";

function NavbarExercise() {
    return (
        <Nav className="navbar"
            defaultActiveKey="/"
        >
            <Nav.Item>
                <Link className="link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="link" to="/create">Create</Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavbarExercise
