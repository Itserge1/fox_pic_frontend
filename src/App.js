import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState({})
  
  useEffect(() => {
    axios.get("http://localhost:8000/api")
      .then(res => {
        console.log(res);
        setImage(res.data)
      })
      .catch(err => {
        console.log({errso: err});
      })
  }, [])
  
  return (
    <div className="App">
      <h1>Fox name: {image.name} </h1>
      <div className="imageq">
        <img src={image.img} alt="Foximage"></img>
      </div>
    </div>
  );
}

export default App;
