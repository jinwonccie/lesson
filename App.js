/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트추천','강남우동맛집','파이션 독학' ]);
  let [따봉, 따봉변경] = useState(0);

  return (

    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={()=>{
        let order = [... 글제목]
        order.sort();
        글제목변경(order)
      }}>가나다 순서로 수정</button>

      <button onClick={()=>{
        let copy =[... 글제목] ;
        copy[0] = '여자코트추천';
        글제목변경(copy);

      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}> 👍 </span> 
        {따봉} </h4>
        <p>2월17일 발행</p>
      </div>

      <div className="list">
        <h4> {글제목[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월17일 발행</p>
      </div>
    </div>
);
}

export default App;
