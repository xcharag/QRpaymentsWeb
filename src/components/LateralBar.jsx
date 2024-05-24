// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import '../styles/LateralBar.css';
import { FaHome } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoExitSharp } from "react-icons/io5";

const Sidebar = () => {
    const handleLogOut = () => {
        localStorage.clear();
    }

    return (
        <div className="sidebar">
            <h2>Pagos QR</h2>
            <ul>
                <li>
                    <NavLink to="/dashboard" activeClassName="active">
                        <FaHome className="icon" size="25px"/>
                        Panel Principal
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/owners" activeClassName="active">
                        <FaPeopleRoof className="icon" size="25px"/>
                        Dueños
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName="active">
                        <IoIosSettings className="icon" size="25px"/>
                        Configuracion
                    </NavLink>
                </li>
                <hr/>
                <li className="logout">
                    <NavLink to="/login" activeClassName="active" onClick={handleLogOut}>
                        <IoExitSharp className="icon" size="25px"/>
                        Cerrar Sesion
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
