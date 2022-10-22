import { Typography } from '@mui/material';
import { CurrencyCircleDollar } from 'phosphor-react';
import { LoginContainer } from './login.styles';

const Login = () => {
  return (
    <LoginContainer>
      <CurrencyCircleDollar size={64} />
      <div>
        <Typography variant="h4" fontWeight={700}>
          Data Integra Finance
        </Typography>
        <Typography variant="subtitle1">Faça login e começe a usar</Typography>
      </div>
    </LoginContainer>
  );
};

export default Login;
