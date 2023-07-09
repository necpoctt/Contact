import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import WaitingComponent from './common/utils';

const Home = lazy(
  () =>
    import(/* webpackPrefetch: true */ /* webpackChunkName: "Home" */ './home'),
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home/*" element={WaitingComponent(Home)} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
