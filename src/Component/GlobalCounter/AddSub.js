import { useContext } from "react";
import { DisplayState } from "./GlobalState";
import styled from "styled-components";

const AddSub = () => {
  const { addCount, subCount, Default } = useContext(DisplayState);
  return (
    <Container>
      <DefaultWrap>
        <Defaults onClick={Default}>GoBack</Defaults>
      </DefaultWrap>
      <ButtonWrap>
        <Button onClick={addCount}>+</Button>
        <Button onClick={subCount}>-</Button>
      </ButtonWrap>
    </Container>
  );
};

export default AddSub;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const DefaultWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Defaults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 10px;
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
