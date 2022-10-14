import { useState } from 'react';
import InputForm from './components/InputForm';
import RenderForm from './components/RenderForm';

function App() {
  const [data, setData] = useState();

  const childToParent = (childData) => {
    setData(childData);
  };
  return (
    <div>
      <InputForm handleData={childToParent} />
      <RenderForm userInput={data} />
    </div>
  );
}

export default App;
