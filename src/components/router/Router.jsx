import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import Todo from '../pages/Todo'

export const Router = () => {
  return (
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/todo"} element={<Todo />}/>
        <Route path={"/*"} element={<Page404 />}/>
      </Routes>
  )
}

