import logo from './logo.svg';
import './App.css';
import ImportConponent from './R004_LifecycleEx';

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImportConponent prop_value = 'FormApp.js'/>
    </div>
  );
}

export default App;
