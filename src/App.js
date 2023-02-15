import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import UserLogin from './Pages/User/UserLogin/UserLogin';
import UserRegister from './Pages/User/UserRegister/UserRegister';
import AdminLogin from './Pages/admin/AdminLogin/AdminLogin';

import AdminHome from './Pages/admin/AdminHome/AdminHome';
import AdminCourses from './Pages/admin/AdminCourses/AdminCourses';
import AdminCourseEdit from './Pages/admin/AdminCourseEdit/AdminCourseEdit';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/login" element={<UserLogin/>}/>
      <Route exact path="/register" element={<UserRegister/>}/>
      <Route exact path="/home" element={<UserRegister/>}/>

    
      <Route exact path="/admin/home" element={<AdminHome/>} />
      <Route exact path="/admin/login" element={<AdminLogin/>}/>
      <Route exact path='/admin/courses' element={<AdminCourses/>} />
      <Route exact path='/admin/course/edit' element={<AdminCourseEdit/>}/>
    

    </Routes>

    </BrowserRouter>
  );
}

export default App;
