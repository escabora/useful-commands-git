import logo from './logo.svg';
import { mock } from './mock';
import './App.css';
import { useEffect } from 'react';
import { DefineColor } from './hooks';

function App() {
  useEffect(() => {
    DefineColor({ color: '#000' });
    console.log('aqui no render');
  }, []);
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log(ev.target.innerHTML);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='content'>
          <img src={logo} className='App-logo logo-inner' alt='logo' />
          <nav>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 1
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 2
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 3
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 4
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 5
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 6
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 7
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 7
            </a>
            <a href='' onClick={(ev) => handleClick(ev)}>
              Link 7
            </a>
          </nav>
        </div>
      </header>
      <div className='content-cards'>
        {mock.map((item, index) => (
          <div key={index} className='card'>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
