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
    <form onSubmit={handleSubmit} >
      <ToastContainer />
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">Enter Email:</label>
        <input type="email" id='email' placeholder='Enter Email' onChange={handleEmail} name='email'
        />
        <br /><br />
        <label htmlFor="password">Enter Password:</label>
        <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handlePassword} />
        <br /><br />
        <button>Submit</button>
        <button>Reset</button>

      </fieldset>
    </form>
  )
}

export default Login