import styled from "styled-components";

import Header from "./Header"
import Footer from "./Footer"

export default function TelaHistorico () {

    return(
        <Container>
            <Header />
            <TopoHabitos>
                <h2>Histórico</h2>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </TopoHabitos>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
    padding: 0 18px;

    span{
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        line-height: 22px;
    }
`

const TopoHabitos = styled.div`
    display: flex;
    align-itens: flex-start;
    flex-direction: column;
    margin-bottom: 28px;

    h2{
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        margin-bottom: 17px;
        margin-top: 112px;
    }
`