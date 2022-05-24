import { useContext } from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";

import Header from "./Header"
import Footer from "./Footer"

export default function TelaHabitos () {

    const {user, setUser} = useContext(UserContext);

    return(
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
`