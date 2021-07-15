import React from 'react'
import HornedBeats from './HornedBeasts';
import data from "./data.json"


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
      <main>
        {beastToRender}
      </main>

    )
  }
}

export default Main;








