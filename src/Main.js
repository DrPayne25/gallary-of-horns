import React from 'react'
import HornedBeats from './HornedBeasts';
import data from "./data.json"
import { CardColumns } from 'react-bootstrap';


class Main extends React.Component {
  render () {
    return(
    <CardColumns>
    {data.map((beast, idx) => (
    <HornedBeats
     key={idx}
     title= {beast.title}
     imageUrl= {beast.image_url}
     description={beast.description}/> 
    ))}
    </CardColumns>
    )
  }
}

export default Main;



{/* <main>
{data.map((beast, idx) => {
 return <HornedBeats
 key={idx}
 title= {beast.title}
 imageUrl= {beast.image_url}
 description={beast.description}/> 
})}
</main> */}




