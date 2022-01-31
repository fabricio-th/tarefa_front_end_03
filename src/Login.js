import React, { useState } from 'react';


const Login = () => {

  const elements = [
    { img: "../login_error.png", label: "Login" },
    { img: "../login_success.svg", label: "Logout" }
  ]

  const [statusElement, setStatusElement] = useState({
    elements, isLogged: 0
  })

  const [elementLogin, setElementLogin] = useState(elements[0])

  const clickButton = () => {
    const logged = statusElement.isLogged ? 0 : 1 
    setElementLogin(statusElement.elements[logged])
    setStatusElement({ elements, isLogged: logged})
  }


  return (
    <div>
      <p />

      <div>
        <img src={ elementLogin.img } className="imageLogin" />
      </div>

      <div>  
        <button onClick={ clickButton } > { elementLogin.label } </button>
      </div>
      
    </div>
  )

}

export default Login