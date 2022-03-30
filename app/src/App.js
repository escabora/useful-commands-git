import logo from './logo.svg';
import { mock } from './mock';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div class='content'>
          <img src={logo} className='App-logo' alt='logo' />
          <nav>
            <a href=''>Link</a>
            <a href=''>Link</a>
            <a href=''>Link</a>
            <a href=''>Link</a>
            <a href=''>Link</a>
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
