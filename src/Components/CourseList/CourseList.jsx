import React, { useEffect, useState } from 'react'
import CoursePost from '../CoursePost/CoursePost'
import SearchBar from '../SearchBar/SearchBar'
import './CourseList.css'
import axios from 'axios'

function CourseList() {
    const [courses , setCourses] = useState([])
    const [searchResults , setSearchResults ] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/admin/courses',{
        withCredentials: true,
    }).then((data)=>{

        setCourses(data.data.data)
        return data.data.data;
      }).then((data)=>{
        setSearchResults(data)
      })

    }, [])
    
    return (
        <div>
            <SearchBar courses={courses} setSearchResults={setSearchResults}  />
            {
              searchResults.map(course => 
                   <CoursePost course={course} key={course._id}/>)
            }
        </div>
      
    )
}

export default CourseList