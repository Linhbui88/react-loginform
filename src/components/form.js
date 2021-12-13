import { useState } from "react"
import { validateEmail,checkPassword } from '../utils/helpers'


const Form = () => {
  const [userName,setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const {target} = e
    const inputName = target.name;
    const inputValue = target.value;
    if (inputName === 'userName') {
      setUserName(inputValue)
    } else if (inputName === 'email') {
      setEmail(inputValue)
    } else if (inputName === 'password')
    setPassword(inputValue)


  }
  const handlleFormSubmit = (e) => {
    e.preventDefault()
    if(!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if(!checkPassword(password)) {
      setErrorMessage(`Choose a more secure password for the account: ${userName}`);
      return;
    };
 
    setUserName('');
    setEmail('')
    setPassword('')
    alert(`Hello ${userName}`)

  }
  return (
    <>
      
      <form className="container m-5">
        <h1> Log in Form</h1>
        <h2>Hello {userName}</h2>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        /><br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /><br />
        
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        /><br />
        <button className ="my-3" type="button" onClick={handlleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </>
    
  );
  
}

export default Form


