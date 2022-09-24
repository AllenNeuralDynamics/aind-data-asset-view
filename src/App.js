import { useState, useEffect } from 'react';
import axios from 'axios';
// import InputForm from './components/InputForm';
// import RenderForm from './components/RenderForm';

function App() {
  
  const [data, setData] = useState();

  const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
  const PAT = process.env.REACT_APP_PAT;

  useEffect(() => {
    // Error: CORS 
    function getAllDataAssets() {
      axios({
        url: `${API_DOMAIN}`,
        method: 'get',
        headers: { 'Authorization':`${PAT}`}
      })
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
        .catch((error) => {
        console.log(error);
      })
    };
    getAllDataAssets()
  }, []);


    // axios.get(`${API_DOMAIN}/${PAT}`)
    // .then((response) => {
    //   console.log(response.data)
    //   setData(response.data);
    // })
    //   .catch((error) => {
    //   console.log(error);
    // })

  return (
    <div>
      {/* <InputForm handleData={childToParent}/> */}
      {/* <RenderForm userInput={data} apiDomain={API_DOMAIN} pat={PAT}/> */}
      <pre id="json">
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  );
};

export default App;
