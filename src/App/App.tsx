import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from "recoil";
import Navigation from "../components/Navigation";
import Router from "../router/Router";
import PrivateParamsForm from "../components/PrivateParamsForm";
import {Container, Divider, Stack, Typography} from "@mui/material";
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <Container className={styles.app}>
      <Stack spacing={2}>
        <Typography variant="h1" fontSize={32} textAlign="center" mb={4}>Private And Role Routes</Typography>
        <Container>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <PrivateParamsForm />
            <Navigation />
          </Stack>
        </Container>
        <Divider />
        <Container>
          <Router />
        </Container>
      </Stack>
    </Container>
  )
}

const MainApp = () => (
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)

export default MainApp;
