import styled from "styled-components";

export const ContainerItens = styled.div`
  width: 500px;
  height: 700px;
  background: rgb(185, 181, 181);
  background: radial-gradient(
    circle,
    rgba(185, 181, 181, 1) 20%,
    rgba(220, 220, 224, 1) 72%
  );
  border-radius: 61px 61px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ${props => props.isLarge && `
   width: 800px;
   height: 100%;
   min-height: calc(100vh - 30px)`}
`;