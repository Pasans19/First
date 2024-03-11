// Footer.js
import React from 'react';
import './foter.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>Your description about your food recipe website goes here.</p>
          </div>
          <div className="col-md-6"> {/* Apply the 'right' class here */}
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
            <div className="col-md-6">
           
              <h4>Social Media</h4>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              {/* Add more social media links as needed */}
            </div>
          
        </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© 2024 Your Food Recipe Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
