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
    &:hover{
        cursor: pointer;
    }
    @media only screen and (min-width: 1023px) {
        width: 10%;
        left: 89%;
    }
    
`;
/**
 * 
 * @param {*} props - setLoggedIn hook for toggling log in state.
 * @returns - Renders a logout button for user interaction and returns user to home page onClick.
 */
function Logout(props){
    let history = useHistory()
    return (
        <LogoutButton onClick={(e) => {props.setLoggedIn(false); history.push('/')}}>Logout</LogoutButton>
    )
}

export default Logout;  
