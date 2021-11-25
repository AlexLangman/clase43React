import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sideBar';
import ContentWrapper from './components/contentWrapper';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
