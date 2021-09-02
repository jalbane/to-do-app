import React from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

const LogoutButton = styled.button `
    border: none;
    font-size: 20px;
    background-color: black;
    color: white;
    width: 20%;
    box-sizing: content-box;
    display: block;
    left: 79%;
    text-align: center;
    position: relative;
    margin-top: 1%;
    padding: 0px;
    @media only screen and (min-width: 1023px) {
        width: 10%;
        left: 89%;
    }
    
`;

function Logout(props){
    let history = useHistory()
    return (
        <LogoutButton onClick={(e) => {props.setLoggedIn(false); history.push('/')}}>Logout</LogoutButton>
    )
}

export default Logout;  
