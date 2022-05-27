import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from "../context/UserContext";
import '../assets/styles/reset.css';


import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";

export default function App () {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    )
}