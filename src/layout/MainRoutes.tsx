import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '../features/board/Board'
import Home from '../features/home/Home'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  )
}

export default MainRoutes