import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from "./routes/homepage/homepage"
import Createpage from "./routes/createpage/createpage"
import Authpage from "./routes/authpage/authpage"
import Postpage from "./routes/postpage/postpage"
import Searchpage from './routes/searchpage/searchpage'
import Profilepage from './routes/profilepage/profilepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './routes/layouts/mainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<Createpage />} />
      <Route path="/pin/:id" element={<Postpage />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/:username" element={<Profilepage />} />
      </Route>
      <Route path="/auth" element={<Authpage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
