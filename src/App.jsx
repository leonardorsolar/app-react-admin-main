import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
