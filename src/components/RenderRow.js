function RenderRow(props){

  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
};

export default RenderRow;