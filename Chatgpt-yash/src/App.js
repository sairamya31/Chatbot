import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import LoginPage from "./Components/LoginPage/login";
import SignupPage from "./Components/SignUpPage/signup"

export default function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/" element={<Homepage  />}/>
            </Routes>
        </BrowserRouter>
  )
}
