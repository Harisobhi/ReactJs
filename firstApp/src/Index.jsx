import React from 'react'
import Student from './Student'

function Main() {
  return (
    <div>
      <Student name="Hari" age={20} isStudent={true}/>
      <Student name="Siva" age={30} isStudent={false}/>
      <Student name="Hari" age={45} isStudent={true}/>
      <Student name="Ravi" />
      <Student />
    </div>
  )
}

export default Main
