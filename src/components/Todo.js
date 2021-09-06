
import React, {useState, useEffect} from 'react';
import NewTodo from './NewTodo.js'; //Displays a new input field after button click
import Logout from './Logout.js';   //Return to login page
import EnterTodo from './EnterTodo.js'; //User input, updates list on saving
import SearchBar from './SearchBar.js';
import styled from 'styled-components';
import '../styles/Todo.css'

const MainTodoDisplay = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
    background-color: whitesmoke;
    box-shadow: 2px 2px 5px;
    @media only screen and (min-width: 769px) {
        width: 60%;
    }
    @media only screen and (min-width: 1023px) {
        width: 40%;
    }
    @media only screen and (min-width: 1279px) {
        width: 30%;
    }
`;

const TodoList = styled.span`
    width: 100%;
    height: 315px;
    overflow-y: auto;
    display: block;
    background-color: white;
    border-bottom: solid 1px black;
    & > div:nth-child(2n){
        background-color: whitesmoke;
    }    
`;

/* Landing page component after successful login */
function Todo(props){
    const [todo, setTodo] = useState([])
    useEffect(()=> {
        let getTodos = Object.values(localStorage)
        let arr = []
        for (const element of getTodos){
            arr.push( element )
        }
        setTodo(arr)
    },[])

    return(
        <div className = 'home-page'>
            {/*!props.loggedIn ? history.push('/'): null*/}            
            <Logout setLoggedIn={props.setLoggedIn}/>
            <h2>My To-Do List</h2>
            <MainTodoDisplay>
                
                <div className="search-bar">
                    <SearchBar todo={todo} setTodo ={setTodo} />
                    <NewTodo todo={todo} setTodo={setTodo} />
                </div>
                <TodoList>
                {todo.map( (item, index )=> {
                    return (<EnterTodo 
                        text={item}
                        todo = {todo}
                        index ={index}
                        key = {index}
                        setTodo ={setTodo}
                    />)
                })
                }
                </TodoList>
            </MainTodoDisplay>
        </div>
    )

}

export default Todo;