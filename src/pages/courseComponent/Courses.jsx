import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
  let [courses, setCourses] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/courses')
      .then((res) => {
        console.log(res.data)
        setCourses(res.data)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/courses/${id}`)
      .then(() => {
        toast.info("Course Deleted Successfully");
        setTimeout(()=>{
          navigate(0); 
        },3000)
      });
  };
  
  return (
    <section id="courselist-container">
      <Sidebar />
      <ToastContainer />
      <aside className="course-list">
        {
          courses.map((courseData) => {
            console.log(courseData)
            return (
              <ol key={courseData.id} className='course-card'>
                <p>{courseData.courseName}</p>
                <p>{courseData.courseDuration}</p>
                <p>{courseData.trainerName}</p>
                <button onClick={() => handleDelete(courseData.id)}>Delete</button>
                <button>Edit</button>
              </ol>
            )
          })
        }
      </aside>
    </section>
  )
}

export default Courses