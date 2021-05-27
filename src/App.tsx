import 'materialize-css/dist/css/materialize.min.css';
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import {useRoutes} from "./useRoutes";
import {BrowserRouter} from "react-router-dom";

const App: FC = () => {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
          {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
