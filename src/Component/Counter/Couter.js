import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Counter = () => {
  const [Display, setDisplay] = useState(2);

  const addCount = () => {
    setDisplay(Display + 2);
  };
  const subCount = () => {
    setDisplay(Display - 2);
  };
  const divCount = () => {
    setDisplay(Display / 2);
  };
  const multCount = () => {
    const rand = Math.random();
    setDisplay(Display * rand);
  };

  return (
    <Container>
      <Wrapper>
        <Displays>{Display}</Displays>
        <ButtonWrap>
          <Button onClick={addCount}>+</Button>
          <Button onClick={subCount}>-</Button>
          <Button onClick={divCount}>/</Button>
          <Button onClick={multCount}>*</Button>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
const Displays = styled.div`
  width: 100%;
  height: 50%;
  font-size: 2rem;
  font-weight: bold;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonWrap = styled.div`
  width: 100%;
  height: 50%;
  background-color: skyblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: white;
  font-size: 1.2rem;
  background-color: black;
  font-weight: bold;
`;
