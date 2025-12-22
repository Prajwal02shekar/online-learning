import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

const EditCourse = () => {
    let [editCourse, setEditCourse] = useState({
        courseName: "",
        duration: "",
        trainerName: "",
        startDate: ""
    })
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/courses/${id}`)
            .then((res) => {
                console.log(res.data)
                setEditCourse(res.data)
            })
    }, [id])

    let navigate = useNavigate();

    let handleChange = (e) => {
        let { name, value } = e.target;
        setEditCourse({ ...editCourse, [name]: value })
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/courses/${id}`,editCourse)
        .then((res)=>{
            console.log(res.data);
            toast.success("Course Updated Successfully")
            setTimeout(()=>{
                navigate('/courses')
            },3000)
        }).catch((err)=>{
            toast.error(`${err}`)
        })
    }
    return (
        <form className='register-form' onSubmit={handleSubmit} >
            <ToastContainer />
            <fieldset>
                <legend>Update Course</legend>
                <label htmlFor="courseName"> Select Course:</label>

                <select name="courseName" id="courseName" value={editCourse.courseName} onChange={handleChange}>
                    <option value="">--Select Course---</option>
                    <option value="Java Full Stack">Java Full Stack</option>
                    <option value="Python Full Stack">Python Full Stack</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="MEAN Stack">MEAN Stack</option>
                    <option value="Software Testing">Software Testing</option>

                </select>

                <label htmlFor="duration">Duration:</label>
                <input type="text" placeholder='Enter Duration' value={editCourse.duration} name='duration' id='duration' onChange={handleChange} />

                <label htmlFor="trainerName">Trainer Name:</label>
                <input type="text" placeholder='Enter Trainer Name' value={editCourse.trainerName} id='trainerName' name='trainerName' onChange={handleChange} />

                <label htmlFor="startDate">Course Start Date</label>
                <input type="date" id='startDate' placeholder='Enter Start Date' value={editCourse.startDate} name='startDate' onChange={handleChange} />


                <div className="button-container">
                    <button type="submit">Update Course</button>
                    <button type="reset" onClick={() => setEditCourse({ courseName: "", duration: "", trainerName: "", startDate: "" })}>Reset</button>
                </div>

            </fieldset>
        </form>
    )
}

export default EditCourse