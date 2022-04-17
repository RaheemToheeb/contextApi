import React, { useContext } from "react";
import AddSub from "./AddSub";
import MultDiv from "../GlobalCounter/MultDiv";
import { DisplayState } from "../GlobalCounter/GlobalState";
import styled from "styled-components";

const Counter2 = () => {
  const { Display } = useContext(DisplayState);
  return (
    <div>
      <Container>
        <Wrapper>
          <AddSub />
          <h1>{Display}</h1>
          <MultDiv />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Counter2;

const Seen = styled.div`
  width: 50px;
  height: 30px;
  background-color: skyblue;
  color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
  background-color: skyblue;
`;

// const MultDiv = styled.div`
//   width: 50%;
// `;
