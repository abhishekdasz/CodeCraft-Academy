import React from 'react'
import './App.css'
import logo from './images/code.png'
import heroImg from './images/vr 1.png'

const HomePage = () => {
  return (
<div class="background">
        <nav id="navbar">
            <img src={logo} alt="logo" class="logo"/>

            <ul>
                <li class="item"> <a href="/"> Home </a> </li>
                <li class="item"> <a href="/"> Services </a> </li>
                <li class="item"> <a href="/"> About Hackathons </a> </li>
                <li class="item"> <a href="/"> Contact Us </a> </li>
            </ul>
            
            <button type="button"> <span>  </span> </button>
        </nav>

        <div class="hero-container">
            <div class="imgs">
                <img src={heroImg} alt="heroimg" class="anim"/>
            </div>

            <div class="text-container">
                <h1 class="anim"> CodeCraft <br/>  Academy </h1>
                <p class="anim"> Welcome to CodeCraft Academy, your gateway to the world of coding and technology education. Our website is dedicated to empowering individuals with the knowledge and skills they need to thrive in the digital age. Whether you're a beginner taking your first steps into coding or a seasoned professional looking to expand your skill set. </p>
                <div class="btns"> Explore </div> 
                
            </div>
        </div>
    </div>

  )
}

export default HomePage
