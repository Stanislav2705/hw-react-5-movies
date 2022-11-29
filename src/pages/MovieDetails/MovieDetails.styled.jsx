import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';


export const Wrapper = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export const LinkEl = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  svg {
    align-items: center;
    margin-right: 4px;
    color: #fd8b08ed;
  }
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
   @media screen and (max-width: 420px) {
    margin-left: 10px;
  }
`;

export const Img = styled.img`
  display: inline-block;
  height: auto;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Box = styled.div`
  display: flex;
  padding-bottom: 20px;
  @media screen and (max-width: 420px) {
    display: block;
    margin: 0px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  display: block;
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Info = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  padding-top: 20px;
  @media screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 420px) {
    justify-content: center;
  }
`;

export const ItemListInfo = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const LinkListInfo = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  transition: color 250ms;
  color: black;
  padding: 6px;
  transition: color 250ms;
  border-radius: 10px;
  &.active {
    color: white;
    background-color: #fd8b08ed;
  }
  &:hover:not(.active) {
    color: #fd8b08ed;
  }
`;

export const TitleInfo = styled.h2`
  display: block;
  margin: 0;
  margin-bottom: 20px;
`;
