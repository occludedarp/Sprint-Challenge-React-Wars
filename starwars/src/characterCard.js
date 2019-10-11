import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const CharacterCard = props => {
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>{props.characterName}</CardTitle>
            <CardSubtitle>Height: {props.characterHeight}</CardSubtitle>
            <CardSubtitle>Eye-Color: {props.characterEyeColor}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
    
}

export default CharacterCard;
