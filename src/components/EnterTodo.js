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
    width: 60%;
    padding: 15px 15px;
    font-family: inherit;
    background-color: transparent;
`;

const SaveButton = styled.button `
    background-color: black;
    color: white;
    width: 28.5%;
    height: 30px;
    margin: auto;
    margin-right: 2%;
    padding: 0px;
    border: none;
    &:active{
        color: black;
        background-color: white;
    }
`;

/** EnterTodo component
 * Users will mainly be interacting with this component for creation, updates and deletion of todo tasks.
 * @param {*} props - text, todo, index, key, setTodo
 * @returns 
 */   
function EnterTodo(props){
    const [editState, setEditState] = useState(null)
    const [value, setValue] = useState()

    /** Submit event listener for submitting a todo.
     * Updates state and localstorage.
     * @param {*} e - onSubmit Event 
     */
    function handleTodoSubmission(e){
        e.preventDefault();
        let tempArray = props.todo.slice()
        tempArray.splice(props.index, 1, value)
        props.setTodo(tempArray)
        localStorage.setItem(Date.now(), value)
        setEditState(true);
    
    }

    /** Event listener for deleting a todo.
     * Deletes selected task from state and local storage.
     */
    function handleDelete(){
        alterDataByKeyValue();
        let tempArray = Object.values(localStorage)
        props.setTodo(tempArray)
    }

    /** Event listener for updating this components Edit state.
     * Toggles editState between true/false for conditional rendering below.
     */

    function updateEditState(){
        setEditState(false)
        setValue(props.text)
        alterDataByKeyValue();
    }

    /** Event listener for updating state this components text value state.
     * On text change deletes the current todo from local storage.
     * When user submits the form todo text value updates and pushes it to local storage.
     * @param {*} e - onChange event
     */
    function handleInputFieldChange(e){
        setValue(e.target.value); 
    }
    /**
     * 
     */
    function alterDataByKeyValue(){
        let tempKeyName = Object.keys(localStorage)
        let searchForKeyFromLS

        for (const element of tempKeyName){
            if (localStorage.getItem(element) === props.text){
                searchForKeyFromLS = element
            }
        }
        
        localStorage.removeItem(searchForKeyFromLS)
    }
    /**Edit button for individual todo items.
     * 
     * @returns Renders an edit button after a todo item has been submitted.
     */
    function EditTodo(){
        return(
            <FormButton onClick={(e)=>{updateEditState()}}><Edit/></FormButton>
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
                <FormButton onClick={e => handleDelete()}><Delete /></FormButton>
                <EditTodo  />
            </div>
            }
        </div>
    )
}

export default EnterTodo;