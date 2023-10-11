import { Fragment, useState } from 'react';
import './App.css';
import GetAIGenImage from './components/GetAIGenImage';


const App = () => {
  const [prompt, setPrompt] = useState('')

  const onPromptSubmit = (event) => { 
    event.preventDefault();
    const searchFieldString = event.target[0].value;

    setPrompt(searchFieldString);
  };

  // const prompt = 'a pretty car';
    return(
      <>
        <form onSubmit={onPromptSubmit}>
          <input name='prompting' type = 'search' placeholder='Enter Prompt' />
          <button type='submit'>Go!</button>
        </form>
         
        {prompt ? <GetAIGenImage prompt={prompt} /> : <h1>Waiting for prompt</h1>}
      </>
        
    )
}

export default App;
