import React from 'react';
import './card.css';

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735_960_720.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 4</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
