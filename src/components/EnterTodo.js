import React,{useState} from 'react';
import styled from 'styled-components';
import Delete from '../icons/Delete';
import Edit from '../icons/Edit';
import '../styles/EnterTodo.css'

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 1%;
    outline: 1px black solid;
    font: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const FormButton = styled.button`
    width: 15%;
    padding: 0;
    height: 20px;
    float: right;
    display: inline;
    background-color: transparent;
    border: none;
    transition: 500ms;
    &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
    }
`;

const InputTodo = styled.input`
    flex-grow: 2;
    border: none;
    font-size: 16px;
    padding: 0px;
`;

const SaveButton = styled.button `
    background-color: black;
    color: white;
    width: 42%;
    border: none;
    &:active{
        color: black;
        background-color: white;
    }
`;

const TodoWrapper = styled.div `
    background-color: red;
    @media only screen and (min-width: 1024px) {
        width: 40%;
        margin: 0 auto; 
    }
`;

function EnterTodo(props){
    const [editState, setEditState] = useState(null)
    const [value, setValue] = useState()

    function handleTodoSubmission(e){
        e.preventDefault();
        let tempArray = props.todo.slice()
        tempArray.splice(props.index, 1, {text: value})
        props.setTodo(tempArray)
        setEditState(true);
        localStorage.setItem(Date.now(), value)
    }

    function handleDelete(e){
        let tempArray = props.todo.slice() //copy the Todo array
        tempArray.splice(props.index, 1) //remove the index from the array
        let tempKeyName = localStorage.key(props.index) //hold the deleted Todos key from localstorage
        props.setTodo(tempArray)        //set state
        localStorage.removeItem(tempKeyName)  //remove key from local storage
    }

    function updateEditState(e){
        setEditState(false) //change state to display an input field to edit the todo.
    }

    function handleInputFieldChange(e){
        
        setValue(e.target.value); 
        let tempKeyName = localStorage.key(props.index)
        localStorage.removeItem(tempKeyName)
    }

    function EditTodo(){
        return(
            <FormButton onClick={(e)=>{updateEditState(e)}}><Edit/></FormButton>
        )
    }

    return (
        <div>
           {props.text === null || editState === false
            ? <Form action="" onSubmit={(e) => handleTodoSubmission(e) }>
                <InputTodo required onChange={(e) => handleInputFieldChange(e)} id="Todotext" type ="text" pattern="[A-Za-z0-9_ ]{1,25}" maxLength="25" defaultValue={props.text}></InputTodo>
                <SaveButton className = "save-todo" type="submit"> Save </SaveButton>
            </Form>
            : <div className="MainTodo">
                {props.text}
                <FormButton onClick={e => handleDelete(e)}><Delete /></FormButton>
                <EditTodo  />
            </div>
            }
        </div>
    )
}

export default EnterTodo;