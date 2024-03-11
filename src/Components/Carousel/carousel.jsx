import React from 'react';
import './carousel.css';

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Recipe 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Recipe 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Recipe 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src="https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_1280.jpg" className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Pasta Dish</h5>
            <p>Delicious pasta with sauce and cheese.</p>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="https://cdn.pixabay.com/photo/2014/06/16/23/10/spices-370114_1280.jpg" className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spicy Seasonings</h5>
            <p>Aromatic spices to enhance your dishes.</p>
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg" className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Assorted Platter</h5>
            <p>Enjoy a variety of dishes in one platter.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
