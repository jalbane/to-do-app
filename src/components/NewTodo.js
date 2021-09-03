import React from 'react';
import styled from 'styled-components';

const AddTodoButton = styled.button`
    width: 15%;
    margin-left: 0%;
    font-size: 16px;
    background-color: black;
    border: none;
    height: 24px;
    color: white;
    @media only screen and (min-width: 769px) {
        margin-left: 2%;
    }
`;

/** Add new todo component
 * 
 * @param {*} props - todo, setTodo
 * @returns - Renders a button for user to click to add todos to list. 
 */
function NewTodo(props){
    /**onClick event listener
     * Pushes a new index onto the todo array with empty text value.
     * Since the size of the array has updated another EnterTodo component will render.
     * @param {*} e - Event 
     */
    function handleClick(e){
        e.preventDefault();
        let string = null
        let tempArray = props.todo;
        tempArray = [...tempArray, string]
        props.setTodo(tempArray)
    }

    return (
        <AddTodoButton type="submit" onClick={(e) => {handleClick(e)}}>New</AddTodoButton>
    )
}

export default NewTodo;