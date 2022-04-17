import React, { useContext } from "react";
import { DisplayState } from "./GlobalState";
import styled from "styled-components";

const MultDiv = () => {
  const { divCount, multCount } = useContext(DisplayState);
  return (
    <Container>
      <Button onClick={divCount}>/</Button>
      <Button onClick={multCount}>*</Button>
    </Container>
  );
};
export default MultDiv;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: black;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
`;
