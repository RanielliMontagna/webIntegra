import { Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useApp } from '../../store/app/app';
import { Loading } from '../loading/loading';
import { useNotification } from '../../hooks/useNotification';

const Layout = () => {
  const { palette } = useTheme();
  const { isLoading } = useApp();

  // Notificação
  useNotification();

  return (
    <>
      {isLoading && <Loading />}
      <Grid container height="100vh" bgcolor={palette.background.default}>
        <Outlet />
      </Grid>
    </>
  );
};

export { Layout };
