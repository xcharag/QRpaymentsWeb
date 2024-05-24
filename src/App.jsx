import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Payments from "./pages/Payments.jsx";
import Settings from "./pages/Settings.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            //<ProtectedRoute>
                                <Dashboard />
                            //</ProtectedRoute>
                        }
                    />
                    <Route
                        path="/owners"
                        element={
                            //<ProtectedRoute>
                            <Payments />
                            //</ProtectedRoute>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            //<ProtectedRoute>
                            <Settings />
                            //</ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
