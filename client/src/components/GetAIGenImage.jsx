import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER_URL = 'http://localhost:3001';



const GetAIGenImage = (input) => {
  //retrieve prompt string from input object
    const inputPrompt = input.prompt;
    const [imageURL, setImageURL] = useState('');
 

    useEffect(() => {        
        axios.get(SERVER_URL, {
          responsetype: 'blob',          
          headers: {
            'Content-Type': 'image/jpg',
          },
          //Prompt is passed in here
          params: { prompt: inputPrompt } 
        })
        .then(res=> {
          //res.data is base64 string. Use it to create data url to pass to img src
          let srcValue = `data:image/jpg;base64,${res.data}`

          setImageURL(srcValue)
        }).catch(err => {
                console.log(err)
        })   
        
      
      
    }, [inputPrompt])
    
  return (
    <div>     
      {imageURL && <img src={`${imageURL}`} alt="" />}      
    </div>
    
  );
}

export default GetAIGenImage;