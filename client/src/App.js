import Header from './Header/Header';
import Widget from './Widget/Widget';
import './App.css';


function App() {

  

  return (
    <div>
      <Header/>
      <div className="App">
        <div className="Hero-text">
          Give Floof access to your financial data
        </div>
        <div className="Widget-container">
          <Widget/>
        </div>
      </div>

    </div>
  );
}

export default App;
