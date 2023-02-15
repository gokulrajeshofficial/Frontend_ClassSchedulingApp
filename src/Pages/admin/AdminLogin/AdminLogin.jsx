import React, { useState, useEffect } from 'react'
import './AdminLogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'

function AdminLogin() {
  const navigate = useNavigate();

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

    const generateError = (err) => toast.error(err,{
    position:'top-right',
  })
  
  useEffect(() => {
    console.log(user, password)
  }, [user, password])

const onSubmit=(e)=>{
    e.preventDefault();

      axios.post('http://localhost:5000/admin/login', {
        username: user,
        password
      }, { withCredentials: true }).then((data) => {
        if (data.data.status) {
          navigate('/admin/home')
        } else {
          console.log(data)
          generateError(data.data.error)
        }
      }).catch((err)=>{
        console.log(err)
      })
  
}

  return (
    <div className='containers'>
      <div className="wrapper">
        <h2 className='text-center title-sign'>CoursoType</h2>
        <div className="logo mt-4">
          <img src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg" alt="" />
        </div>
        <div className="text-center mt-3 name">
          Admin Login
        </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" onChange={(e) => { setUser(e.target.value) }} name="userName" id="userName" placeholder="Username" />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} id="pwd" placeholder="Password" />
          </div>
          <button onClick={(e) => { onSubmit(e) }} className="btn mt-3">Login</button>
        <ToastContainer/>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin