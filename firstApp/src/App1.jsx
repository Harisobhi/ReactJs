import React, { useState } from 'react'
import Form from './Form'

function App1() {
const getState = (n) => {
alert("Your Name: "+n);
}
return (
<div>
<Form getState={getState}/>
<h2>Name: {Form.getState}</h2>
</div>
)
}
export default App1