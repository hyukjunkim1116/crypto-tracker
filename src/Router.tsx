import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Coins}/>
        <Route path="/:coinId" component={Coin}>
          <Route path="chart" component={Chart}/>
          <Route path="price" component={Price}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
