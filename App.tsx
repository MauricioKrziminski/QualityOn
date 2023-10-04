import React from "react"
import Routes from "./src/Routes/AppRoutes"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#131016" />
      <Routes />
    </>
  )
}
