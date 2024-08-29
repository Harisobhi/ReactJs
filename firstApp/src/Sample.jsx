import React, { useState } from 'react';

function Sample() {
const [name, setName] = useState("Name:",'')
const [rno, setRno] = useState("Rno:",'')
const handler = (e) => {
  e.preventDefault();
 
}

  return (
    <form onSubmit={handler}>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
      <input type='text' value={rno} onChange={(e) => setRno(e.target.value)}></input>
      <button type='submit'>Submit</button>
  <div className='sample'>
  <p>Set Your picture</p>
  <h1> {name}</h1>
  <h2>{rno}</h2>
  </div>
  </form>
  )
}
export default Sample
