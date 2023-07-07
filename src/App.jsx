import './App.css'
import Header from './component/Header'
import { db } from "./firebase"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Write from './pages/write'
import Edit from './pages/edit'

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/write' element={<Write />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}


