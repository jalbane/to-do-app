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