import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WaitingComponent from './common/utils';

const Home = lazy(
  () =>
    import(/* webpackPrefetch: true */ /* webpackChunkName: "Home" */ './home'),
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={WaitingComponent(Home)} />
    </Routes>
  </BrowserRouter>
);

export default App;
