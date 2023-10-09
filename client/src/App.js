import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const SERVER_URL = 'http://localhost:3001';



const App = () => {
    const [imageURL, setImageURL] = useState('');
    

    useEffect(() => {        
      
      axios.get(SERVER_URL, {
          responsetype: 'blob',          
          headers: {
            'Content-Type': 'image/jpg',
          },
          params: { prompt: "a pretty cat" } 
      })
      .then(res=> {
        //res.data is base64 string. Use it to create data url to pass to img src
        let srcValue = `data:image/jpg;base64,${res.data}`

        setImageURL(srcValue)
      }).catch(err => {
              console.log(err)
          })   
        
    }, [imageURL])
 
  return (
    <div>     
      {imageURL && <img src={`${imageURL}`} alt="" />}
    </div>
    
  );
}

export default App;
