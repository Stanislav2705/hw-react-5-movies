import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;

  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 420px) {
    width: calc((100% - 1 * 10px) / 2);
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 3 * 10px) / 4);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 4 * 10px) / 6);
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export const Img = styled.img`
  width: 100%;
`;
