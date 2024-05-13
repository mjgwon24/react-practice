//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ImportComponent from './R00/R003_ImportComponent';
import LifecycleEx from './R00/R004_LifecycleEx';
import LifecycleEx2 from './R00/R005_LifecycleEx';
import LifecycleEx3 from './R00/R006_LifecycleEx';
import LifecycleEx4 from './R00/R007_LifecycleEx';
import LifecycleEx5 from './R00/R008_LifecycleEx';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 함수형 컴포넌트 App 정의
function App() {
  // 컴포넌트가 화면에 렌더링 할 JSX 반환
  // JSX 내부에서 HTML과 유사한 코드를 사용하여 UI 구성 가능
  return (  
    <div className="App">
      <h1>Strat React!</h1>
      <p>This is a simple React app.</p>
      <ImportComponent></ImportComponent>
      <LifecycleEx></LifecycleEx>
      <LifecycleEx2></LifecycleEx2>
      <LifecycleEx3
        prop_value = '[6] From App.js'
      />
      <LifecycleEx4
        prop_value = '[7] From App.js'
      />
      <LifecycleEx5
        prop_value = '[8] From App.js'
      />
    </div>
  );
}

// App 컴포넌트 내보내기
export default App;
