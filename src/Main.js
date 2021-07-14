import React from 'react'
import HornedBeats from './HornedBeasts';
import data from "./data.json"


class Main extends React.Component {
  render () { 
    return (
      <main>
        {data.map((beast, idx) => {
         return <HornedBeats
         key={idx}
         title= {beast.title}
         imageUrl= {beast.image_url}
         description={beast.description}/> 
        })}
      </main>
    )
  }
}

export default Main;




