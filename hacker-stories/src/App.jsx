import * as React from 'react';

const welcome = {
  title:"Poop",
  greeting:"Hey",
}
function getTitle(){
  return welcome.title;
}
function App() {
  return (
    <div>
      <h1>Hello {getTitle()}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </div>
  )
}

export default App
