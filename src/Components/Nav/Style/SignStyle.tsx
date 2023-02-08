import styled from "styled-components";

export const SignStyle = styled.div`
  position: absolute;
  top: -30rem;
  right: 1rem;
  z-index: -1;
  
  padding: 2rem;

  width: 25rem;
  
  background-color: #619d64;
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;

  box-shadow: 0 .25rem .25rem rgba(2, 2, 2, .5);
  

  @keyframes open {
    0% {
      top: -30rem;
    }
    99% {
      z-index: -1;
    }
    100% {
      top: 8rem;
      z-index: 1;
    }
  }

  @keyframes close {
    0% {
      top: 8rem;
      z-index: -1;
    }
    }
    100% {
      top: -30rem;
      z-index: 1;
    }
`;
