
import styles from './pagemodule.css'
import Link from 'next/link';
import Navbar from './components/Navbar';
import Hero from './hero/Hero'


export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  
    <div className='card-container'>
      <div className="card">

      <img src="https://placekitten.com/200/300" alt="Event Photo" />

      <div className="card-content">
        <div className="card-title">Event Title</div>
        <div className="card-date">Date and Time: December 25, 2023, 7:00 PM</div>
        <div className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor suscipit elit, at convallis orci viverra ac.
        </div>

        
        <button className="register-button">Register</button>
      </div>

      
      <div className="countdown-banner">
        <div className="countdown">
          <span className='p1'>10 <p>DAYS</p></span>
          <span className='p2'>21 <p>HOURS</p></span>
          <span className='p3'>22 <p>MINUTES</p></span>
          <span className='p4'>22 <p>SECONDS</p></span>
        </div>
      </div>
    </div></div>
    <div className='card-container1'>
      <div className="card">
      {/* Photo side of the card */}
      <img src="https://placekitten.com/200/300" alt="Event Photo" />

      {/* Content side of the card */}
      <div className="card-content">
        <div className="card-title">Event Title</div>
        <div className="card-date">Date and Time: December 25, 2023, 7:00 PM</div>
        <div className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor suscipit elit, at convallis orci viverra ac.
        </div>

        {/* Register button */}
        <button className="register-button">Register</button>
      </div>

      {/* Countdown banner outside the card */}
      <div className="countdown-banner">
        <div className="countdown">
          <span className='p1'>10 <p>DAYS</p></span>
          <span className='p2'>21 <p>HOURS</p></span>
          <span className='p3'>22 <p>MINUTES</p></span>
          <span className='p4'>22 <p>SECONDS</p></span>
        </div>
      </div>
    </div></div>
    
    
    </>

  );

}
