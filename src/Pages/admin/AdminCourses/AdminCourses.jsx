import React from 'react'
import CourseList from '../../../Components/CourseList/CourseList'
import CreatePost from '../../../Components/CreatePost/CreatePost'
import Navbar from '../../../Components/Navbar/Navbar'

function AdminCourses() {
    return (
        <div>
            <Navbar />
            <ul class="nav nav-tabs  nav-fill " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#courseList" type="button" role="tab" aria-controls="home" aria-selected="true">Course List</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#createCourse" type="button" role="tab" aria-controls="profile" aria-selected="false">Create Course</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="courseList" role="tabpanel" aria-labelledby="home-tab">
                    <CourseList/>
                </div>
                <div class="tab-pane fade" id="createCourse" role="tabpanel" aria-labelledby="profile-tab">
                    <CreatePost/>
                </div>
            </div>

        </div>
    )
}

export default AdminCourses