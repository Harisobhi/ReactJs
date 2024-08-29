import React, { useState } from 'react'

function Form(props) {
    const [name,setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.getState(name);
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type = "submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
