import React from 'react';

function Navs() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Breakfast</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Lunch</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Dinner</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="true">Tea Time</a>
      </li>
    </ul>
  );
}

export default Navs;
