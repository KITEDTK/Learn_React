import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import MyComponent from "./Example/MyComponent";

import { BrowserRouter, Switch, Route} from "react-router-dom";
/**

 * 2 components: class component / function component
 *
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch> {/* switch dùng để chuyển trang */}
            {/* exact chỉ dùng khi có path đúng y hệt như vậy  */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos" exact>
              <ListTodo />
            </Route>
            <Route path="/about" exact>
              <MyComponent />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
