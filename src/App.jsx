// import { useState } from 'react';
// import InputForm from './components/InputForm';
// import RenderForm from './components/RenderForm';
import DynamicTable from './components/BasicTable';

function App() {
  // const [data, setData] = useState();

  // const childToParent = (childData) => {
  //   setData(childData);
  // };
  return (
    <div>
      {/* <InputForm data-testid="input-form" handleData={childToParent} /> */}
      {/* <RenderForm data-testid="render-form" userInput={data} /> */}
      <DynamicTable />
    </div>
  );
}

export default App;
