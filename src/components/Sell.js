import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../image/brand-logo.jpg';
import '../App.css';
import './header.js';


function sellpage() {
  
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


<div class="listing_message">
<h4>You are lsiting an item</h4>
</div>

<div class="listing-form">
<form action="/action_page.php">
  <input type="file" id="myFile" name="filename" />

  <input type="text" id="lname" name="lname" value="Listing title" /><br></br>

  <div class="dropdown">
  <button class="dropbtn">Choose category</button>

<select id="category" name="category" >
    <div class="dropdown-content">
        <a href="sport">Sports</a>
       <a href="furniture">Furniture</a>
        <a href="clothing">Clothing</a>
        <a href="cars">Cars</a>
        <a href="electronics">Electronics</a>
        <a href="gaming">Gaming</a>
        <a href="#toys">Toys</a>
        <a href="jewellery">Jewellery</a>
        <a href="sale">SALE</a>
      </div>
  </select>
  </div>
  <br></br>

  <label for="description">Description:</label><br></br>

  <textarea name="message" rows="10" cols="30"></textarea>
  <br></br>

  <label for="condtion">Condition:</label><br></br>
  <input type="checkbox" id="condition" value="Old" /> Old
  <input type="checkbox" id="condition" value="New" /> New
  <br></br>

  <label for="offer">Allow buyer to make an offer</label>
  <input type="checkbox" id="myListing" /> <br></br>

  <input type="checkbox" id="myListing" />
  <label>Run an auction</label><br></br>

  <input type="checkbox" id="myListing" />
  <label>Set a Buy Now</label><br></br>

  <label>Shipping</label> <br></br>
  To be arrnaged with seller <br></br>

  <label>Payment options:</label> <br></br>
    Ping, Cash, NZ bank deposit 

    <br></br>
  <input type="submit" value="Submit" />
  
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

export default sellpage;
    