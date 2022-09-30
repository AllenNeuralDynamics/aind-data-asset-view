export default function RenderRow(props){

  // props.data.forEach((element) => {
  //   props.data['created'] = new Date(props.data['created']*1000)
  // }); 
  
  // console.log(props.data)

  // console.log(props.data["created"])
  // props.data['created'] = new Date(props.data['created']*1000);

  // if (props.data['created']) {
    // console.log(new Date(props.data['created']*1000))
  // }

  // const keyToChange = 'created';

  // keyToChange.forEach(key => {
  //   if (props.data[keyToChange]) {
  //     props.data[key] = new Date(props.data[key] * 1000)

  //   }
  // })
  // console.log(props.data)

  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
};