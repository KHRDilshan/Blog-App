import React from 'react'
import Logo from '../image/logo.png'
import './footer.css'

function Footer() {
  return (
    <footer>
     <img className="flogo" src={Logo} alt=''/>
     <span>
      Made with ❤️ and <b>React.js</b>.
     </span>
    </footer>
  )
}

export default Footer
