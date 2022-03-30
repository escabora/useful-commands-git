import logo from './logo.svg';
import { mock } from './mock';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div class='content'>
          <img src={logo} className='App-logo logo-inner' alt='logo' />
          <nav>
            <a href=''>Link 1</a>
            <a href=''>Link 2</a>
            <a href=''>Link 3</a>
            <a href=''>Link 4</a>
            <a href=''>Link 5</a>
            <a href=''>Link 6</a>
          </nav>
        </div>
      </header>
      <div class='content-cards'>
        {mock.map((item, index) => (
          <div key={index} class='card'>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
