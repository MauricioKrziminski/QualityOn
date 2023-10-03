import { StatusBar } from "react-native"
import { Home } from "./src/screens/Home"
import { Login } from "./src/screens/Login"
import { Register } from "./src/screens/Register"
import React, { useState } from "react"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  function toggleLoggedIn() {
    setIsLoggedIn((prevState) => !prevState)
  }

  function toggleRegister() {
    setIsRegister((prevState) => !prevState)
  }

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {isRegister ? (
        <Register
          // toggleLoggedIn={toggleLoggedIn}
          toggleRegister={toggleRegister}
        />
      ) : (
        <Login
          toggleLoggedIn={toggleLoggedIn}
          toggleRegister={toggleRegister}
        />
      )}
    </>
  )
}
