import * as React from 'react';

const title='React';
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>{title} is my new toy</p>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </div>
  )
}

export default App
