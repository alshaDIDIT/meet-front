import styled from "styled-components";

export const SignInputStyle = styled.div`

  input {
    padding: 1rem;
    border-radius: .5rem;
    margin: .5rem 0;
    width: 100%;
    border: none;
    box-shadow: .15rem .1rem .1rem rgba(1, 1, 1, .25);
    font-family: 'Quicksand', sans-serif;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: 'Quicksand', sans-serif;
  }

  h1 {
    font-size: 3rem;
    color: aliceblue;
    text-shadow: .1rem .1rem .1rem rgba(1, 1, 1, .5);
  }

  //button {
  //  margin-top: .5rem;
  //  width: 100%;
  //  font-family: 'Quicksand', sans-serif;
  //  font-size: 1.5rem;
  //  padding: .5rem;
  //  border-radius: .5rem;
  //  border: none;
  //  background-color: white;
  //}
  //
  //button:hover {
  //  background-color: #ececec;
  //}
  //
  //button:active {
  //  background-color: #cbcaca;
  //}

  a {
    color: aliceblue;
  }
`;
