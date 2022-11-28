import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 260px;
  margin-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 420px) {
    width: calc((100% - 1 * 16px) / 2);
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 16px) / 3);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 4 * 16px) / 5);
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover,&:focus {
    color: #fd8b08ed;
  }
`
export const Title = styled.h3`
  font-weight: 400;
  margin: 0;
  padding: 10px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`
export const Span = styled.span`
  font-weight: 100;
`
