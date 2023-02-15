import React, { useState } from 'react'
import './CreatePost.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios'

function CreatePost() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const generateError = (err) => toast.error(err,{
    position:'top-right',
  })

  const onSubmit = (details) => {
    
    console.log(details)
    axios.post('http://localhost:5000/admin/course/create', {
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
          <h2 className='text-center'>Add a New Course</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <label>Course Title</label>
            <input
              type="text"
       
              placeholder='Course Name'
              {...register("name")}
            />
            <label>Course Description:</label>
            <textarea
              type="text"
    
              placeholder='Course Desrciption'
              {...register("description")}
            />
            <label>Course Duration:</label>
            <input
              type="text"
   
              placeholder='Course duration'
              {...register("duration")}
            />
            <label>Subject 1</label>
            <input
              type="text"

              placeholder='Course duration'
              {...register("subject1")}
            />
            <label>Subject 2</label>
            <input
              type="text"
              required
              placeholder='Course duration'
              {...register("subject2")}
            />
            <label>Subject 3</label>
            <input
              type="text"
 
              placeholder='Course duration'
              {...register("subject3")}
            />
            <label>Subject 4</label>
            <input
              type="text"
 
              placeholder='Course duration'
              {...register("subject4")}
            />
            <button>Add Course</button>
          </form>
        </div>
      </div>
      <ToastContainer/>

    </div>
  )
}

export default CreatePost