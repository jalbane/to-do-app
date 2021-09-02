import React from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

const LogoutButton = styled.button `
    border: none;
    font-size: 20px;
    background-color: none;
    width: 10%;
    left: 5%;
    text-align: center;
`;

function Logout(props){
    let history = useHistory()
    return (
        <LogoutButton onClick={(e) => {props.setLoggedIn(false); history.push('/')}}>Logout</LogoutButton>
    )
}

export default Logout;