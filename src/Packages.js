import React from 'react'
import event1 from './images/event-1.png'
import event2 from './images/event-2.jpg'
import event3 from './images/event-3.jpg'

const Packages = () => {
  return (
    <div>
      <section class="packages" id="packages">
        <h1 class="heading"> Popular Events </h1>
        <div class="box-containerss">
            <div class="boxss">
                <div class="image">
                    <img src={event1} alt="event-1"/>
                </div>
            <div class="content">
                <h3> TechX Conference </h3>
                <p> Join us at the highly anticipated TechX Conference, it brings together industry leader & tech enthusiasts from around the world.  </p>
                <div class="price"> Early Bird: ₹999  </div>
                <a href="/" class="btn"> Enroll now </a>
            </div>
        </div>
        <div class="boxss">
            <div class="image">
                <img src={event2} alt="event-2"/>
            </div>
            <div class="content">
                <h3> Featured Events </h3>
                <p> Join us at the Data Science Summit, the premier event for data science professionals, analysts, and enthusiasts. </p>
                <div class="price"> VIP Pass: ₹2599 </div>
                <a href="/" class="btn"> Enroll Now </a>
            </div>
        </div>
        <div class="boxss">
            <div class="image">
                <img src={event3} alt="event-3"/>
            </div>
            <div class="content">
                <h3> FutureTech Expo </h3>
                <p> Join us at the FutureTech Expo, here you'll have the opportunity to delve into emerging technologies & explore futuristic concepts. </p>
                <div class="price"> Investor Pass: ₹199 </div>
                <a href="/" class="btn"> Enroll Now </a>
            </div>
        </div>
    </div>
    </section>

    <div className="footer">  </div>
    </div>
  )
}

export default Packages
