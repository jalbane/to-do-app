import {React, useState} from 'react';
import '../styles/login.css';
import Account from '../icons/Account';
import Password from '../icons/Password';
import {useHistory} from "react-router-dom";

function Login(props){
    //Boolean flags for showing/hiding input validation error messages.
    const [showEmailError, setShowEmailError] = useState(null)
    const [showPasswordError, setShowPasswordError] = useState(null)
    const [showServerError, setShowServerError] = useState(null)
    const [serverError, setServerErrorMessage] = useState('')
    let history = useHistory();
    /*
    This function handles input validation on the Email field
    and changes state to show/hide error messages.
    */
    function handleEmailChange(e){
        //Clears the error message if the placeholder text is visible again (example: Editing the string back to an empty string).
        if (e.target.value === '' ){
            return setShowEmailError(false)
        }
        //Set the regular expression for a valid email.
        const checkValidInput = new RegExp (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // if the input is invalid update State to true (displays the error message).
        if (!checkValidInput.test(e.target.value)){
            return setShowEmailError(true)
        }
        // else update State to false (hides error message).
        return setShowEmailError(false)
    }

    /*
    This function handles input validation on the Password field
    and changes state to show/hide error messages.
    */
    function handlePasswordChange(e){
        //Clears the error message if the placeholder text is visible again (example: empty string).
        if (e.target.value === '' ){
            return setShowPasswordError(false)
        }
        //Set the regular expression for a valid password.
        const checkValidInput = new RegExp(/^(?=.*[a-zA-Z\d]).{4,16}$/)
        // if the input is invalid update State to true (displays the error message).
        if (!checkValidInput.test(e.target.value)){
           return setShowPasswordError(true)
        }
        // else update State to false (hides error message).
        return setShowPasswordError(false)
    }
    /** onSubmit event handler
     * Prepares an HTTP request to post to server for logging in.
     * Form submission is disabled while waiting for response.
     * @param {*} e - Event
     */
    function handleSubmit(e){
        e.preventDefault();

        document.getElementsByTagName('button')[0].disabled = true;
        var formdata = new FormData();
        formdata.append("email", document.getElementById('email').value);
        formdata.append("password", document.getElementById('password').value);
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", requestOptions)
          .then(response => response.json())
          .then(data => {
              if(data.code === "Error"){
                  setShowServerError(true)
                  setServerErrorMessage(data.message)
                  props.setLoggedIn(false)
              }
              if(data.user_is_active === 1){
                props.setLoggedIn(true);
                setShowServerError(false);
                setServerErrorMessage(null)
                history.push('/home')
              }
          })
          .catch( error => {alert(error)})
        document.getElementsByTagName('button')[0].disabled = false;
    }

    return(
        <div className="login-page"> 
            <h2> 
                Rapptr Labs
            </h2>
            <form method = "POST" onSubmit={handleSubmit}>
                <label htmlFor = "email">Email</label>
                <div className ="login-input">
                    <i>
                        <Account />
                    </i>
                    <input required type = "email" 
                        id ="email"
                        name="email"
                        placeholder = "user@rapptrlabs.com" 
                        maxLength="50" 
                        min = "4"
                        onChange={handleEmailChange}> 
                    </input>
                </div>    
                {/* Conditional rendering based on the presence or absence of validation errors */}
                {showEmailError ? <div className ="error-msg"> Not a valid email </div>: <div className ="hidden-div"> </div>} 
                
                <label htmlFor = "password">Password</label>
                <div className="login-input">
                    <i className = "password-svg">
                        <Password />
                    </i>
                    <input required type = "password" 
                        name="password"
                        id="password"
                        placeholder = "Must be at least 4 characters." 
                        onChange ={handlePasswordChange}
                        maxLength="16"
                        minLength="4">
                    </input>
                </div>    
                {/* Conditional rendering based on the presence or absence of validation errors */}
                {showPasswordError ? <div className ="error-msg"> Password must be 4-16 characters in length </div>:  <div className ="hidden-div"> </div>} 
                
                <button type="submit" className="submit-button" > Login </button>
                {showServerError ? <div className = "error-msg"> {serverError}</div> : <div className ="hidden-div"></div>}
            </form>
        </div>
    )
}

export default Login;