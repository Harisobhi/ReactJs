import PropTypes from 'prop-types'
import React from 'react'

function Student(props) {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
 }
 Student.PropTypes = {
    name: PropTypes.string,
   age: PropTypes.number,
   isStudent: PropTypes.bool 
  }

  Student.defaultProps = {
    name: "Guest",
    age: "10",
    isStudent: false
  }

export default Student

Student.PropTypes = {
    name: PropTypes.string,
    
  }
