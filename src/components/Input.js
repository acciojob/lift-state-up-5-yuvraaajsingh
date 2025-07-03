import React from 'react'

function Input(props) {
    function handleClick(){
        props.setIsLoggedIn(true)
    }
  return (
    <div>
        <form >
        <label htmlFor="userName">Username:</label>
        <input type="text" id='userName' required/>
        <br />
        <br />
        <label htmlFor="password" required>Password:</label>
        <input type="password" id='password' />
        <br />
        <br />
        <button type="submit" onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}

export default Input