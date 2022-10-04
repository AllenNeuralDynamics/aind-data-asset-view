import { useState } from 'react';
import InputForm from './components/InputForm';
import RenderForm from './components/RenderForm';

function App() {
  const [data, setData] = useState('');

  const childToParent = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <InputForm data-testid="search-field" handleData={childToParent} />
      <RenderForm data-testid="display-data" userInput={data} />
    </div>
  );
}

export default App;
