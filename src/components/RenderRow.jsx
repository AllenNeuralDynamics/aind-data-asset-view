function RenderRow(props) {
  props.keys.map((key) => <td key={props.data[key]}>{props.data[key]}</td>);
}

export default RenderRow;
