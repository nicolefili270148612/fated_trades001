import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../image/brand-logo.jpg';
import '../App.css';
import './header.js';
import './register.css';

function register() {
  
  return (

  <body>

<div class="nav">
            <div class="logo">
            <a href="header.js"><h1>FATED TRADES</h1>
    <h3>BUY & SELL</h3></a>



<div class="image">
<img src={brandLogo} class="image" alt="logo" />

</div>
</div>
</div>


<div id="id01" class="sform">

    <form class="sform-content" action="ft_main.html">
<div class="container">
<h1>Sign Up Form</h1>
      <p>Please fill in this form to create an account.</p>

      <label for="email"><b>Email</b></label>
      <br></br>
      <input type="text" placeholder="Enter Email" name="email" required />
<br></br>
      <label for="psw"><b>Password</b></label>
      <br></br>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <br></br>
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <br></br>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      <br></br>
   <br></br>
        <button type="submit" class="signupbtn">Sign Up</button>
     
</div><br></br>
    </form>
</div>

<footer>
        <Link href="#">Desktop View</Link>
        <Link href="#">Tablet View</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Register</Link>
        
</footer>
</body>
);
}

export default register;