import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './CoursePost.css'


function CoursePost({course}) {
    const navigate = useNavigate()
    return (
        <div className='row d-flex justify-content-center mt-3 '>
            <div className='col-md-7 '>
                <div class="card mb-3" style={{ "width": "540px;" }}>

                    <div class="row ">
                        <div class="col-md-4 bg-pink1 leftCol d-flex flex-column justify-content-center align-items-center">
                          <h5 className='text-light text-center'>Course ID:</h5>  
                          <p className='text-light text-center d-block'>{course._id}</p>
                         
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{course.name}</h5>
                                <p class="card-text">{course.description}</p>
                                <p class="card-text"><b>Chapters : </b>[{course.subjects.subject1}] , [{course.subjects.subject2}] , [{course.subjects.subject3}] , [{course.subjects.subject4}]</p>
                                <p class="card-text"><small class="text-muted">Duration : {course.duration}</small></p>
                                <div className='row justify-content-center'>
                             <button onClick={()=>{navigate('/admin/course/edit',{state : course} )} }className='btn btn-outline-success w-75'>Edit</button>
                          <button onClick={()=>{navigate('/admin/course/delete',{state : course})}} className='btn btn-outline-danger w-75'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePost