import metadata from '../metadata';
import RenderRow from './RenderRow';


function RenderForm(props) {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * 
   * @param {string} props.userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   */

  // console.log(Object.keys(metadata.results[0]))


  const getKeys = () => {
    return Object.keys(metadata.results[0])
  }

  const getHeader = () => {
    let keys = getKeys();

    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }

  const rowData = () => {
    let items = metadata.results;
    let keys = getKeys();

    return items.map((row, index) => {
      return (
      <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      )
    })
  }


    return (
      <table>
        <thead>
          <tr>
          {getHeader()}
          </tr>
        </thead>
        <tbody>
          {rowData()}
        </tbody>
      </table>
    )
};

export default RenderForm;