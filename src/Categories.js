import React from 'react'
import img1 from './images/category-1.png'
import img2 from './images/category-2.png'
import img3 from './images/category-3.png'
import img4 from './images/category-4.png'

const Categories = () => {
  return (
      <section class="category">
        <h1 class="heading"> Professional Courses </h1>

        <div class="box-container">

            <div class="box">
                <img src={img1} alt="img1"/>
                <h3> Introductory </h3>
                <p> These courses are designed for beginners who are new to a particular subject or field. It will provide a foundational understanding of the topics   </p>
                <a href="/" class="btn">Read More</a>
            </div>
    
            <div class="box">
                <img src={img2} alt="img-2"/>
                <h3> Intermediate </h3>
                <p>  Intermediate courses build upon the foundational knowledge gained in introductory courses. Who have some prior knowledge in the field it further enhance their skills. </p>
                <a href="/" class="btn">Read More</a>
            </div>
    
            <div class="box">
                <img src={img3} alt="img3"/>
                <h3> Advanced </h3>
                <p>  Intermediate courses build upon the foundational knowledge gained in introductory courses. Who have some prior knowledge in the field it further enhance their skills. </p>
                <a href="/" class="btn">Read More</a>
            </div>
    
            <div class="box">
                <img src={img4} alt="img1"/>
                <h3>Let's Hack!</h3>
                <p>  Intermediate courses build upon the foundational knowledge gained in introductory courses. Who have some prior knowledge in the field it further enhance their skills. </p>
                <a href="/" class="btn">Read More</a>
            </div>
        </div>     
    </section>
  )
}

export default Categories
