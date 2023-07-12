import React from 'react'
import aboutImg from './images/2.jpg'

const About = () => {
  return (
    <section class="about" id="about">

        <div class="image">
            <img src={aboutImg} alt="about-img"/>
        </div>

        <div class="content">
            <h3>About Us</h3>
            <p>Learn more about CodeCraft Academy, our mission, and our team of experienced instructors. Discover our commitment to providing high-quality coding education and empowering individuals to succeed in the tech industry. CodeCraft Academy offers a comprehensive range of courses, resources, and a supportive community to help you excel in the world of technology.</p>
            <a href="/" class="btn"> Read More </a>
        </div>

    </section>
  )
}

export default About
