import React from 'react';
import brandLogo from '../image/brand-logo.jpg';
import { Link } from 'react-router-dom';
import './contact.css'; 
import './header.js';

function contact() {
  return (

   <section>

    <div class="nav">
            <div class="logo">
            <a href="header.js"><h1>FATED TRADES</h1>
    <h3>BUY & SELL</h3></a>



<div class="image">
<img src={brandLogo} class="image" alt="logo" />

</div>
</div>
</div>
   
     <div class="contact">
             
      <h1>Contact Us</h1>
      <h4>ONLINE INQUIRY</h4>
      {
        <form>
        <input type="text" placeholder="Name" name="name" required/>
        <br></br>
        <input type="text" placeholder="Enter Email" name="email" required/>
        <br></br>
        <label for="description" placeholder="Message">Description:</label>
        <br></br>
        <textarea name="message" rows="10" cols="30"></textarea>
        </form>
        }
      </div>

      <div class="contact-info">
  <h2>CONTACT DETAILS</h2>
  
    fated_trades@nz.com <br></br>
    (09)828-0000 <br></br>
    New Zealand <br></br>
    <br></br>
    Nicole_ft@nz.com <br></br>
    (09)630-2722 <br></br>
    <br></br>
    Jayden_ft@nz.com <br></br>
    (09)435-6869 
    <br></br>
    </div>
    <br></br>
    <footer>
        <Link href="#">Desktop View</Link>
        <Link href="#">Tablet View</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Register</Link>
        
</footer>

    </section>
    
  );
}

export default contact;