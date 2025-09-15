import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createBrowserRouter, RouterProvider } from 'react-router';

import authLoader from './components/layouts/AuthLayout/AuthLayout.loader';
import sidebarLoader from './components/layouts/SidebarLayout/SidebarLayout.loader';
import Login from './components/pages/Auth/Login';
import Dashboard from './components/pages/Dashboard';
import DetailProject from './components/pages/Projects/DetailProject';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    loader: sidebarLoader,
    element: <Dashboard />,
  },
  {
    path: '/login',
    loader: authLoader,
    element: <Login />,
  },
  {
    path: '/projects/:id',
    loader: sidebarLoader,
    element: <DetailProject />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
