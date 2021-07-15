import React from 'react'
import HornedBeats from './HornedBeasts';
import data from "./data.json"
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component {
  render () { 
    let beastToRender = [];

    data.forEach((beastComponent,idx) => {
      let beast = <HornedBeats
        key={idx}
        title={beastComponent.title}
        imageUrl= {beastComponent.image_url}
        description={beastComponent.description}
        />
        beastToRender.push(beast);
      })

    return (
      <CardColumns>
        {beastToRender}
      </CardColumns>

    )
  }
}

export default Main;





