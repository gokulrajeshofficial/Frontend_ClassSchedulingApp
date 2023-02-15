import React from 'react'
import './SearchBar.css'
function SearchBar({courses , setSearchResults}) {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleSearchChange = (e)=>{
        if(!e.target.value) return setSearchResults(courses) //all courses display when search is empty
        console.log(e.target.value)
        const resultsArray = courses.filter(courses => courses.name.includes(e.target.value) || courses.description.includes(e.target.value))
        console.log(resultsArray)
         setSearchResults(resultsArray)

    }
  return (
    <div className='row  d-flex justify-content-center'>
        <div className='col-md-8 '>
        <form className='search' onSubmit={handleSubmit}>
            <div className='row d-flex'>
            <div className='col-10'>
            <input className='search_input ps-3' placeholder='Search Courses Here ...' type="text" onChange={handleSearchChange}/>
            </div>
            <div className='col-2'>
            <button className='seachButton  btn btn-outline-success'>Search</button>
            </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default SearchBar