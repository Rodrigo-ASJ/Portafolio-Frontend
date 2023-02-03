import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "@/views/home/Home"
import Create from '@/components/Create'
import Edit from '@/components/Edit'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/create' element={<Create/>} />
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default Router