import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    let navigate = useNavigate();
    let [userData, setUserData] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        age: "",
    })
    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form sybmitted")

        axios.post("http://localhost:3000/register", userData)
            .then((res) => {
                console.log(res.data)
                toast.success("User Register Successfull")
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
                setUserData({
                    username: "",
                    phone: "",
                    email: "",
                    password: "",
                    age: "",
                })
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer />
            <fieldset>
                <legend>Signup</legend>
                <label htmlFor="un">Enter Username:</label>
                <input type="text" id='un' placeholder='Enter Username' name='username' onChange={handleChange} />
                <br /><br />
                <label htmlFor="phone">Enter Phone Number:</label>
                <input type="text" id='phone' placeholder='Enter Phone Number' name='phone' onChange={handleChange} />
                <br /><br />
                <label htmlFor="email">Enter Email:</label>
                <input type="email" id='email' placeholder='Enter Email' name='email'
                    onChange={handleChange} />
                <br /><br />
                <label htmlFor="password">Enter Password:</label>
                <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handleChange} />
                <br /><br />
                <label htmlFor="age">Enter Age:</label>
                <input type="number" id='age' placeholder='Enter Age' name='age' min={20} onChange={handleChange} />
                <br /><br />
                <button>Submit</button>
                <button>Reset</button>

            </fieldset>
        </form>
    )
}

export default Register