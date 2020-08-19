import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';


const App=()=>{
  return(<div>
    <p>Hello</p>
    <SeasonDisplay />
  </div>);
}

ReactDOM.render(
 <App />,
  document.getElementById('root')
);
