import { useState } from 'react'
import './Header.css'

function Header() {
  const [count, setCount] = useState(100)

  return (
    <>
     <button style ={{borderTop:"0px"}}onClick={() =>setCount((count) => count - 1)}>
        Click count is {count}
        </button>

        </>
  )
}

export default Header