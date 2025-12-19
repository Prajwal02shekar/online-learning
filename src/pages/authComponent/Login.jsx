import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {

  let [email, setEmail] = useState('');
  let [password, sePassword] = useState('');
  let navigate = useNavigate();

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  let handlePassword = (e) => {
    sePassword(e.target.value)
  }


  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")

    axios.get(`http://localhost:3000/register?email=${email}&&password=${password}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          toast.success("Login Successfull")
          localStorage.setItem("userDegtails", JSON.stringify(res.data));
          localStorage.setItem("isLoggedIn", "true")
          setEmail("");
          sePassword("");
          setTimeout(() => {
            navigate('/');
          }, 2000)


        } else {
          toast.error("Invaild User Details")
        }
      })
  }
  return (
     <form onSubmit={handleSubmit} className='register-form'>
                <ToastContainer />
                <fieldset>
                    <legend>Login</legend>
    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' placeholder='Enter Email' name='email' onChange={handleEmail} />
    
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handlePassword} />
  
    
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button type="reset" onClick={() => setUserData({ username: "", phone: "", email: "", password: "", age: "" })}>Reset</button>
                    </div>
    
                </fieldset>
            </form>
  )
}

export default Login