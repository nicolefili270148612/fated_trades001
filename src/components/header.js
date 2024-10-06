import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../image/brand-logo.jpg';
import sale from '../image/sale.jpg';
import '../App.css';
import '../components/contact';
import '../components/about-page';
import '../components/register';
import './login.css';

function Header() {
  
  return (
    <body>
        
        <div class="nav">
            <div class="logo">
    <h1>FATED TRADES</h1>
    <h3>BUY & SELL</h3>



<div class="image">
<img src={brandLogo} class="image" alt="logo" />

</div>
</div>
</div>

<div class="menu">
      <ul>
        <li>
          <Link to="Sell.js">SELL</Link>
        </li>
        <li>
          <Link to="/contact.js">CONTACT</Link>
        </li>
        <li>
          <Link to="/about-page.js">ABOUT</Link>
        </li>
        <li>
          <Link to="/register.js">REGISTER</Link>
          </li> 
          <button class="open-button" onclick="openForm()">LOGIN</button>
        <div class="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Login</h1>
        
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
        
            

            <button type="submit" class="btn">Login</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div>
        </ul>
        </div>

        <div class="search">
       
       <input class="mySearch"  type="text" placeholder="Search.." 
       id="mySearch" onkeyup="myFunction()" title="Type in a category"></input>
 <ul id="myMenu">
         <li>Sports</li>
         <li>Furniture</li>
         <li>Clothing</li>
         <li>Cars</li>
         <li>Electronics</li>
         <li>Gaming</li>
         <li>Toys</li>
         <li>Jewellery</li>
         <li>SALE</li>
       </ul>
 
 </div>

 <div class="slideshow">

<div class="w3-content w3-display-container">
    <div class="sale">
<p>A bargain at your finger tips!</p>
<p>Shop now</p>


<img src={sale} class="image" alt="sale" />
</div>
</div>
</div>   


    <div class="category">
        <ul class="myCategory">
            <li><a href="sell.js">Sports</a></li>
            <li><a href="furniture.js">Furniture</a></li>
            <li><a href="clothing.js">Clothing</a></li>
            <li><a href="cars.js">Cars</a></li>
            <li><a href="electronics.js">Electronics</a></li>
            <li><a href="gaming.js">Gaming</a></li>
            <li><a href="toys.js">Toys</a></li>
            <li><a href="jewellery.js">Jewellery</a></li>
            <li><a href="sale.js">SALE</a></li>
          </ul>
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

export default Header;
