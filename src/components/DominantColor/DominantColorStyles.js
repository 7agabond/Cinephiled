import styled from "styled-components";

export const Colorful = styled.div`
  inset: 0;
  background-image: linear-gradient(90deg, #ccbdb4, #392a28d6);
  background-image: ${(props) =>
    `linear-gradient(90deg, ${props.color[[1]]} , ${props.color[[0]] + "8e"})`};
`;