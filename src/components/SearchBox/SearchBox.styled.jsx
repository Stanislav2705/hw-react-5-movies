import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  text-align: center;
`

export const Wrapper = styled.div`
  display: block;
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
  width: 300px;
  height: 20px;
  padding: 6px;
  outline: none;
  border: 1px solid black;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`
