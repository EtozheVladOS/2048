import './App.css';
import 'antd/dist/antd.css';
import Board from '../2048/Board';
import HeaderPanel from '../2048/HeaderPanel';
import Header from '../Header';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderPanel />
      <Board />
    </div>
  );
}

export default App;
