import React from 'react';
import styled from 'styled-components';

const AddTodoButton = styled.button`

    width: 20%;
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
        props.setCopyTodo(tempArray)
    }

    return (
        <AddTodoButton type="submit" onClick={(e) => {handleClick(e)}}>New</AddTodoButton>
    )
}

export default NewTodo;