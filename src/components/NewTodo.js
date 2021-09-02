import React from 'react';
import styled from 'styled-components';

const AddTodoButton = styled.button`
    width: 15%;
    margin-left: 5%;
    font-size: 16px;
    background-color: black;
    border: none;
    color: white;
`;

function NewTodo(props){
    function handleClick(e){
        e.preventDefault();
        let obj ={
            text: null
        }
        let tempArray = props.todo;
        tempArray = [...tempArray, obj]
        props.setTodo(tempArray)
    }

    return (
        <AddTodoButton type="submit" onClick={(e) => {handleClick(e)}}>New</AddTodoButton>
    )
}

export default NewTodo;