import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import { Container, Row} from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [starWarsChar, setStarWarsChar] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`https://swapi.co/api/people/`)
    .then( response => {
      console.log(response.data)
      setStarWarsChar(response.data.results)
    })
    .catch( error => {
      console.log( "no data was returned", error)
    })
}, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <Container>
      <Row>
      {starWarsChar.map((details, index) => {
        return (
          <CharacterCard
            key={index}
            characterName={details.name}
            characterHeight={details.height}
            characterEyeColor={details.eye_color}
          />
        )
      })}
      </Row>
    </Container>
    </div>
  );

}

export default App;
