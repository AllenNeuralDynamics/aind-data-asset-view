import { useState } from 'react';
import RenderForm from './components/RenderForm';
import InputForm from './components/InputForm';

function App() {
  
  const [data, setData] = useState('');

  const childToParent = (childData) => {
    setData(childData);
  }
  
  return (
    <div>
      <InputForm handleData={childToParent}/>
      <RenderForm userInput={data}/>
    </div>
  );
};

export default App;
