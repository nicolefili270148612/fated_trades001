import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../image/brand-logo.jpg';
import '../App.css';
import './header.js';
import './about-page.css';

function aboutpage() {
  
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

<div class="about-message">
        <div>
        <h1>ABOUT FATED TRADES</h1>
        <p>We are an exclusive buy and sell page for kiwi’s in New Zealand. From household appliances, hand crafted accessories, bargain hunters, side hustlers and trust worthy businesses. 
          FATED TRADES 
          are New Zealand’s leading number 1 buy and sell page.</p>
  </div>
  
          <div>
          <h2>Our Story</h2>
          <p>In 2021, COVID-19 hit. 
            Online businesses became the in thing.
            Me and my pal Jayden brainstormed some ideas and decided to create an online business to help those buy and sell their items online fast.
            With our combined connections in delivery, business and online web developing skills we were able to create a trusted top buying and selling website that created a revenue income of 10 million plus in just 1 year.
            
            Now! Many thought another buy and sell business. 
            What our business includes is why we are a top online business with discounted shipping and most items having same day delivery to 2 or 3 days max. 
            TRULY UNBEATABLE as FATE would have it.
            
            So what are you waiting for? You know you were destined for a
            BARGAIN!!! or to start your online business through us.
            
            </p>
        </div>
  
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

export default aboutpage;
    