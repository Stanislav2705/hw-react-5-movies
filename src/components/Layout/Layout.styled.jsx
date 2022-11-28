import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding: 30px 0px;
  background-color: #fd8b08ed;
`

export const Main = styled.main`
  padding-top: 20px;
`
export const Container = styled.section`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
`
export const NavList = styled.ul`
  display: flex;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 420px) {
    justify-content: space-around;
  }
`
export const NavListItem = styled.li`
  margin-left: 20px;
  @media screen and (max-width: 420px) {
    margin-left: 0;
  }
`
export const NavListLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 250px;
  font-size: 30px;
  transition: 250ms;

  &:hover,&:focus,&.active {
    color: white;
  }
  &:hover:not(.active) {
    color: black;
  }
`
