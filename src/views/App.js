import logo from "./logo.svg";
import "./App.scss";
//import MyComponent from './Example/MyComponent';
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * 2 components: class component / function component
 *
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple to do app with react</p>
        <ListTodo />
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
  );
}

export default App;
