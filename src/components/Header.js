import styled from "styled-components";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Header () {

    const {user, setUser} = useContext(UserContext);

    return (
        <Container>
            <h1>TrackIt</h1>
            <img src={user.image} alt="User" />
        </Container>
    )
}

const Container = styled.div `
    widht = 100%;
    height = 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    postion: fixed;
    top: 0;
    right: 0;
    padding: 10px 0px;

    *{
        box-sizing: border-box;
    }

    h1{
        font-size: 40px;
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        marrgin-left: 18px;
    }

    img{
        width: 51px;
        heigth: 51px;
        margin-right: 18px;
        border-radius: 98px;
    }
    
`