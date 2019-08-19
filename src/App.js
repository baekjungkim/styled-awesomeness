import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Button>Hi</Button>
      <Button danger>Danger</Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #dff9fb;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#636e72" : "#fab1a0")};
`;

export default App;
