// import { useState, useEffect } from 'react';
import RenderForm from './components/RenderForm';

// import axios from 'axios';
// import InputForm from './components/InputForm';


// const axios = require('axios').default;
// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_DOMAIN
// });
// axiosInstance.defaults.headers.common['Authorization'] = process.env.REACT_APP_PAT;


// const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
// const PAT = process.env.REACT_APP_PAT;

function App() {
  
  // const [data, setData] = useState();

  // const childToParent = (childData) => {
  //   setData(childData);
  // }
  
  return (
    <div>
      {/* <InputForm handleData={childToParent}/> */}
      <RenderForm/>
    </div>
  );
};

export default App;
