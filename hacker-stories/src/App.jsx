import * as React from 'react';

const welcome = {
  title:"React",
  greeting:"Hey",
}
function getTitle(title){
  return title;
}
function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </div>
  )
}

export default App
