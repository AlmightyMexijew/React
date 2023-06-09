import * as React from 'react';

const App = ()=> {
  const stories = [
    {
      title:'React',
      url:'https://reactjs.org',
      author:'Jordan Walke',
      num_comments:3,
      points:4,
      objectID:0,
    },
    {
      title:'Redux',
      url:'https://redux.js.org/',
      author:'Dan Abramov, Andrew Clark',
      num_comments:2,
      points:5,
      objectID:1,
    },
  ];
  return(
    <div>
      <List list={stories} />
      <Search />
    </div>
  )}
const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  return(
    <div>
    <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  )
}

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
)

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <hr/>
    <span>Author(s):{props.item.author}</span>
    <hr/>
    <span>Comments:{props.item.num_comments}</span>
    <hr/>
    <span>Points:{props.item.points}</span>
  </li>
)
export default App
