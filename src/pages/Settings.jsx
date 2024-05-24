import React from 'react';
import Sidebar from "../components/LateralBar.jsx";

const Settings = () => {
    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="dashboard-content">
                <h1>Settings</h1>
            </div>
        </div>
    );
}

export default Settings;