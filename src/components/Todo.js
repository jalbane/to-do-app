
import React, {useState, useEffect} from 'react';
import NewTodo from './NewTodo.js'; //Displays a new input field after button click
import Logout from './Logout.js';   //Return to login page
import EnterTodo from './EnterTodo.js'; //User input, updates list on saving
import SearchBar from './SearchBar.js';
import styled from 'styled-components';

function Todo(props){
    const [todo, setTodo] = useState([])
    const [copyTodo, setCopyTodo] = useState([])

    useEffect(()=> {
        let getTodos = Object.keys(localStorage)
        let arr = []
        for (const element of getTodos){
            arr.push( new Object({text: element}) )
        }
        setTodo(arr)
    },[])

    return(
        <div>
            <Logout setLoggedIn={props.setLoggedIn}/>
            <div style = {{position: 'relative', width: '20%'}}>
                <SearchBar todo={todo} setTodo ={setTodo} copyTodo={copyTodo}/>
                <NewTodo setTodo={setTodo} setCopyTodo={setCopyTodo} todo={todo}/>
            </div>
            {todo.map( (item, index )=> {
                        return (<EnterTodo 
                            text={item.text}
                            todo = {todo}
                            index ={index}
                            key = {index}
                            setTodo ={setTodo}
                            setCopyTodo={setCopyTodo}
                            copyTodo ={copyTodo}
                        />)
                })
            }
        </div>
    )

}

export default Todo;

/*
filterTodo.length > 0
                ? filterTodo.map( (item, index )=> {
                        return (<EnterTodo 
                            text={item.text}
                            todo = {todo}
                            index ={index}
                            key = {index}
                            setTodo ={setTodo}
                            setFilterTodo={setFilterTodo}
                            hideFilter={false}
                        />)
                })                    
*/