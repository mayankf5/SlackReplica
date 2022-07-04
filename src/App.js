import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Main/Sidebar/Sidebar';
import Dashboard from './components/Main/Dashboard';

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
