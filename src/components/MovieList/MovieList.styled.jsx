import styled from "styled-components";

export const List = styled.ul`
  display: block;
  padding: 16px 0px;
  margin-left: auto;
  margin-right: auto;

  list-style: none;
  @media screen and (min-width: 420px) {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding-left: 0;
  }
`
