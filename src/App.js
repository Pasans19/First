import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Games from './Pages/Games/games';

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
