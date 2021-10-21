import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() { 
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
      </Switch>
      <Home/>
      <GlobalStyles/>
    </Router>
  );
}

export default App;
