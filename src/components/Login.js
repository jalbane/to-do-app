import {React, useState} from 'react';
import '../styles/login.css';
import { VscAccount, VscLock } from "react-icons/vsc";

function Login(){

    //Boolean flags for showing/hiding input validation error messages.
    const [showEmailError, setShowEmailError] = useState(null)
    const [showPasswordError, setShowPasswordError] = useState(null)

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

    function handleSubmit(e){
        e.preventDefault();

        var formdata = new FormData();
        formdata.append("email", "test@rapptrlabs.com");
        formdata.append("password", "Test123");
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    return(
        <div> 
            <h2> 
                Rapptr Labs
            </h2>
            <form method = "POST" onSubmit={handleSubmit}>
                <label htmlFor = "email">Email
                    
                    <i className = "account-svg">
                        <VscAccount />
                    </i>
                    <input required type = "email" 
                        id ="email"
                        name="email"
                        placeholder = "user@rapptrlabs.com" 
                        maxLength="50" 
                        min = "4"
                        onChange={handleEmailChange}> 
                    </input>
                    {/* Conditional rendering based on the presence or absence of validation errors */}
                    {showEmailError ? <div className ="error-msg"> Not a valid email </div>: <div className ="hidden-div"> </div>} 
                </label>

                <label htmlFor = "password">
                    Password
                    <i className = "password-svg">
                        <VscLock />
                    </i>
                    <input required type = "password" 
                        name="password"
                        id="password"
                        placeholder = "Must be at least 4 characters." 
                        onChange ={handlePasswordChange}
                        maxLength="16"
                        minLength="4">
                    </input>
                    {/* Conditional rendering based on the presence or absence of validation errors */}
                    {showPasswordError ? <div className ="error-msg"> Password must be 4-16 characters in length </div>:  <div className ="hidden-div"> </div>} 
                </label>
                <button type="submit" className="submit-button" > Login </button>
            </form>
        </div>
    )
}

export default Login;