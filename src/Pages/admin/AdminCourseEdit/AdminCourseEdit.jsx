import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios'
import { useForm } from 'react-hook-form'


function AdminCourseEdit() {
    const navigate = useNavigate()
    const location = useLocation();
    const [course, setCourse] = useState({})
    const { register, handleSubmit } = useForm()

    useEffect(() => {
      let obj = location.state
   setCourse(obj)
    }, [])

  const generateError = (err) => toast.error(err,{
    position:'top-right',
  })

  const onSubmit = (details) => {
    console.log(details)
    axios.post('http://localhost:5000/admin/course/edit', {
   ...details
    }, { withCredentials: true }).then((data) => {
      console.log(data)
      if (data.data.success) {
        navigate(0)
      } else {
        console.log(data)
        generateError(data.data.err)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='row d-flex justify-content-center mt-3 py-3'>
    <div className='col-md-6 '>
      <div className="create  p-5">
        <h2 className='text-center'>Edit Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Course Title</label>
          <input
            type="text" 
            value={course.name}
            {...register("name")}
          />
          <label>Course Description:</label>
          <textarea
            type="text"
            value={course.description}
            {...register("description")}
          />
          <label>Course Duration:</label>
          <input
            type="text"
            value={course.duration}
            {...register("duration")}
          />
          <label>Subject 1</label>
          <input
            type="text"
            value={course.subjects?.subject1}
            {...register("subject1")}
          />
          <label>Subject 2</label>
          <input
            type="text"
            value={course.subjects?.subject2}
            {...register("subject2")}
          />
          <label>Subject 3</label>
          <input
            type="text"
            value={course.subjects?.subject3}
            {...register("subject3")}
          />
          <label>Subject 4</label>
          <input
            type="text"
            value={course.subjects?.subject4}
            {...register("subject4")}
          />
          <button>Edit Course</button>
        </form>
      </div>
    </div>
    <ToastContainer/>

  </div>
  )
}

export default AdminCourseEdit