import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  text-align: center;
`

export const Block = styled.div`
  display: block;
  @media screen and (max-width: 420px) {
    padding-right: 40px
  }
`
export const Button = styled.button`
  position: absolute;
  align-items: center;
  outline: none;
  height: 34px;
  width: 40px;
  justify-content: center;
  border: 1px solid black;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: #fd8b08ed;
    color: white;
  }
`
export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 6px;
  outline: none;
  border: 1px solid black;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  @media screen and (min-width: 420px) {
    width: 300px;
  }
`
