import {Switch, Route, Redirect} from "react-router-dom"
import { InfoPage } from "./pages/InfoPage";
import {ListPage} from "./pages/ListPage";

export const useRoutes = () => {
  return(
    <Switch>
      <Route component={ListPage} path='/' exact/>
      <Route component={InfoPage} path='/info' exact/>
      <Redirect to='/'/>
    </Switch>
  )
}