import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin: 0;
`;
