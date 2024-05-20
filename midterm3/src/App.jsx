import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;

