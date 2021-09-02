import React,{useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 20%;
`;

const Todo = styled.div`
    width: 20%;
    margin: 0 auto;
`;

function EnterTodo(props){
    const [editState, setEditState] = useState(null)
    const [value, setValue] = useState()

    function handleTodoSubmission(e){
        e.preventDefault();
        let tempArray = props.todo.slice()
        tempArray.splice(props.index, 1, {text: value})
        props.setTodo(tempArray)
        props.setCopyTodo(tempArray)
        setEditState(true);
        document.getElementById('Todotext').readOnly = true;
        localStorage.setItem(value, new Date())
    }

    function handleDelete(e){
        let tempArray = props.todo.slice() //copy the Todo array
        tempArray.splice(props.index, 1) //remove the index from the array
        props.setTodo(tempArray)        //set state
        props.setCopyTodo(tempArray)    //set state of a copy to use for the Search functionality
        localStorage.removeItem(props.text) //remove the Todo from local storage
    }

    function updateEditState(e){
        setEditState(false) //change state to display an input field to edit the todo.
    }

    function EditTodo(){
        return(
            <button onClick={(e)=>{updateEditState(e)}}> Edit </button>
        )
    }

    return (
        <div>
           {props.text === null || editState === false
            ? <Form action="" onSubmit={(e) => handleTodoSubmission(e) }>
                <input required onChange={(e) => setValue(e.target.value)}id="Todotext" type ="text" pattern="[A-Za-z0-9_ ]{1,}" defaultValue={props.text}></input>
                <button className = "save-todo" type="submit"> Save </button>
            </Form>
            : <Todo>
                {props.text}
                <EditTodo  /> 
                <button onClick={e => handleDelete(e)}> Delete </button>
            </Todo>
            }
        </div>
    )
}

export default EnterTodo;