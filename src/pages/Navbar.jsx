import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <aside className="logo">
                <img src="https://tse3.mm.bing.net/th/id/OIP.H_SU-8bZPrsc1v0AMn7uuAHaHd?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </aside>
            <aside className="menu">
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/contactus">Contact US</Link></li>
                    <li><Link to="/trainer">Trainers</Link></li>
                    <li><Link to="/login"><button>Login</button></Link></li>
                    <li><Link to="/register" ><button>Register</button></Link></li>
                </ol>
            </aside>
        </nav>
    )
}

export default Navbar