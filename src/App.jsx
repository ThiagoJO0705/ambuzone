// import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
// import Rodape from './Components/Rodape'

export default function App() {
  

  return (
    <>
    <Outlet/>
    <Menu></Menu>
    </>
  )
}
