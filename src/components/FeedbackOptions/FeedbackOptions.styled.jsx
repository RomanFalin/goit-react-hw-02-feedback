import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonItem = styled.button`
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  outline: none;
  padding: 8px 16px;
  font-size: 16px;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    border-color: black;
  }
`;
