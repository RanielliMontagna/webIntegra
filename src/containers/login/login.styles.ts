import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  align-items: center;

  width: 100%;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
