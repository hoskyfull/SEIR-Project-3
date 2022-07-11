import './AuthPage.css'



import LogInButt from './LogInPage'
import Logo from './logo.svg'
import Tag from './titlebar.svg'


import { Routes, Route } from "react-router-dom";

import SignUpPage2 from './SignUpPage2'
import LogInPage from './LogInPage'
import About from '../AuthPage/LandingNav/About'
import Contact from '../AuthPage/LandingNav/Contact'
import Help from '../AuthPage/LandingNav/Help'



export default function AuthPage({ setUser }) {
    return (
        <main className="landingpage">

            <div className='headder'>
                <img className="logo" src={Logo} width="200px" />
                <div className='nav'>

                    <About />
                    <Contact />
                    <Help />
                </div>
            </div>

            <div className='buttons'>
                <div className="tag">
                    <img src={Tag} width="750px" />
                </div>
                <div className='signUpButt'>
                    <SignUpPage2 setUser={setUser} />

                </div>
                <div className='logInButt'>
                    <LogInPage setUser={setUser} />
                </div>
            </div>

        </main >
    )
}
