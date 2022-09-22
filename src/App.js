import InputForm from './components/InputForm';
import { useState } from 'react';
import RenderForm from './components/RenderForm';

function App() {

  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div>
      <InputForm handleData={childToParent}/>
      <RenderForm userInput={data}/>
    </div>
  );
};

export default App;
