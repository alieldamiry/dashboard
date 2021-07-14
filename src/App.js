import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Layout>
        <Switch>
          <Route path="/orders">
            <div>Orders</div>
          </Route>
          <Route path="/customers">
            <div>customers</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
