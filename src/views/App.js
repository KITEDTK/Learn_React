import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
/**
 * 2 components: class component / function component
 *  
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <MyComponent/>
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
