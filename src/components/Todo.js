
import React, {useState, useEffect} from 'react';
import NewTodo from './NewTodo.js'; //Displays a new input field after button click
import Logout from './Logout.js';   //Return to login page
import EnterTodo from './EnterTodo.js'; //User input, updates list on saving
import SearchBar from './SearchBar.js';
import styled from 'styled-components';
import '../styles/Todo.css'
import { useHistory } from 'react-router-dom';

const MainTodoDisplay = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
    background-color: whitesmoke;
    box-shadow: 2px 2px 5px;
    margin-top: 1%;
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

/* Landing page component after successful login */
function Todo(props){
    const [todo, setTodo] = useState([])
    let history = useHistory();
    useEffect(()=> {
        let getTodos = Object.values(localStorage)
        let arr = []
        for (const element of getTodos){
            arr.push( new Object({text: element}) )
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
                    <NewTodo setTodo={setTodo} todo={todo}/>
                </div>
                    
                {todo.map( (item, index )=> {
                    return (<EnterTodo 
                        text={item.text}
                        todo = {todo}
                        index ={index}
                        key = {index}
                        setTodo ={setTodo}
                    />)
                })
                }
            </MainTodoDisplay>
        </div>
    )

}

export default Todo;