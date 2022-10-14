import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function RenderForm({ userInput }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */

  const [schema, setSchema] = useState();
  const url = new URL('http://localhost:8080/data_assets?');

  const urlBuilder = (userInput) => {
    const queryParams = new URLSearchParams(userInput);
    // console.log(queryparams.toString());
    // console.log(queryparams.entries());
    // queryparams.forEach(function (value, key) {
    //   console.log(key, value);
    // });
    // console.log(url);
    return queryParams;
  };

  useEffect(() => {
    if (userInput) {
      urlBuilder(userInput);
      const getResponse = async () => {
        const response = await fetch(url, {
          method: 'GET',
          body: queryParams,
        });
        const data = await response.json();
        setSchema(data.results);
      };
      getResponse();
      // setSchema('testing');
    }
  }, [userInput]);

  // if (schema) {
  //   const displaySchema = schema.map((info) => (
  //     <tr key={info.id}>
  //       <td>{info.id}</td>
  //       <td>{new Date(info.created * 1000).toLocaleString()}</td>
  //       <td>{info.name}</td>
  //       <td>{info.state}</td>
  //       <td>{info.type}</td>
  //       <td>{info.tags}</td>
  //       <td>{info.description}</td>
  //       <td>{info.files}</td>
  //       <td>{info.size}</td>
  //     </tr>
  //   ));

  //   return (
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Created</th>
  //           <th>File Name</th>
  //           <th>State</th>
  //           <th>Type</th>
  //           <th>Tags</th>
  //           <th>Description</th>
  //           <th>Files</th>
  //           <th>Size</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {displaySchema}
  //       </tbody>
  //     </table>
  //   );
  // }
  // return (
  //   <p />
  // );
}

RenderForm.propTypes = {
  userInput: PropTypes.shape({}),
};
RenderForm.defaultProps = {
  userInput: undefined,
};
export default RenderForm;
