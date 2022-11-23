import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
  padding: 0px;
  margin: 0px;
  list-style: none;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover,&:focus {
    color: #fd8b08ed;
  }
`
export const Title = styled.h3`
  align-items: center;
`
