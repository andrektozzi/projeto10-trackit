import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NameContext from "../context/UserContext";
import '../assets/styles/reset.css';


import TelaLogin from "./TelaLogin";
import TelaRegistro from "./TelaRegistro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";

export default function App () {

    const [user, setUser] = useState({});

    return (
        <NameContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaRegistro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                </Routes> 
            </BrowserRouter>
        </NameContext.Provider>
    )
}