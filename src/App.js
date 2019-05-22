import React,{ Component } from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일을 불러옵니다.
import logo from './logo.svg';
import './App.css';

function App() {
  const text = '도울정보기술';
  const condition = true;
  const style = {
    backgroundColor : 'gray',
    border: '1px solid black',
    height: Math.round(Math.random() * 300) + 50,
    width : Math.round(Math.random() * 300) + 50,
    WebkitTransition: 'all',
    MozTransition:'all',
    msTransition:'all',
  };
  return (
    <div className="App">
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      { condition && '보여주세요'} 
      <div style={style}></div>
      <MyComponent name='3' age={30}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
