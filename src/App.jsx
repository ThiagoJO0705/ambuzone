// import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import { DadosParaRotaProvider } from './Context/DadosParaRota'
export default function App() {
  

  return (
    <>
    <DadosParaRotaProvider>
      <Outlet/>
    </DadosParaRotaProvider>
    <Menu></Menu>
    </>
  )
}
