import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import HeaderMain from "./components/HeaderMain";
import {
  Route,
  Router,
  Switch,
  Redirect,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import CustomProduct from "./pages/CustomProduct";
function App() {
  const history = useHistory();
  return (
    <div>
      <div>
        <BrowserRouter>
          <HeaderMain />
          {/* <About /> */}
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contactus" render={() => <ContactUs />} />
            <Route exact path="/cart" render={() => <Cart />} />
            <Route exact path="/checkout" render={() => <Checkout />} />
            <Route exact path="/product" render={() => <Product />} />
            <Route
              exact
              path="/customproduct"
              render={() => <CustomProduct />}
            />
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
