import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [resource, setResource] = useState('users');
  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/' + resource)
      .then(res => res.json())
      .then((DATA) => console.log(DATA[resource]));
      
      
  }, [resource])

  return (
    <>
    <div className="App">
      <button onClick={() => setResource("users")}>users</button>
      <button onClick={() => setResource("posts")}>posts</button>
      <button onClick={() => setResource("comments")}>comments</button>
    </div>
    {/* <ul>
      {items.map((item) => {
        return <li>{JSON.stringify(item)}</li>
      })}
    </ul> */}
    </>
  );
}

export default App;
