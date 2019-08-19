import React from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Hi</Button>
      <Button danger rotationTime={1}>
        Danger
      </Button>
      <Anchor href="http://google.com">Go to Google</Anchor>
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
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
