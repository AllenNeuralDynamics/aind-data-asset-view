// import { useEffect } from 'react';
// import urlBuilder from './utils';

// const dataAssets = 'http://localhost:8080/data_assets';

// const getDataAssets = () => {
//   const [response, setResponse] = useState([]);
//   const [error, setError] = useState(null);

//   const url = urlBuilder(dataAssets);

//   useEffect(() => {
//     const getResponse = async () => {
//       const response = await fetch(url).catch((error) => {
//         if (!error.response) {
//           setError('Network Error: Cannot connect to Code Ocean.');
//         }
//       });
//       const responseData = await response.json();
//       setResponse(responseData);
//     };
//     getResponse();
//   }, [url]);

//   return { error, response };
// };

// export default getDataAssets;
