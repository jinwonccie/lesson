import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목0, a] = useState('남자겨울코트추천');
  let [글제목1, b] = useState('여자겨울코트추천');
  let [글제목2, c] = useState('파이션 독학');
  let [logo, setLogo] = useState('React Blog');
  return (


    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목0}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목1}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월17일 발행</p>
      </div>
    </div>


);
}

export default App;
