// Write your Character component here
import React from "react";
import styled from "styled-components";
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 45%;
  background-color: white;
  margin: 0.3rem;
  border-radius: 20px;
`;
const Photo = styled.img`
  width: 25%;
  border-radius: 20px;
  border: solid gray 2px;
`;
const CardInfo = styled.div`
  color: black;
  text-align: left;
  padding: 0 1rem;
  width: 75%;
`;
const CharacterCard = (props) => {
  return (
    <Card>
      <Photo src={props.image} alt={props.name} />
      <CardInfo>
        <p className="cardName">Name: {props.name}</p>
        <p className="cardStatus">Status: {props.status}</p>
        <p>Last Known Location: {props.location}</p>
      </CardInfo>
    </Card>
  );
};
export default CharacterCard;
