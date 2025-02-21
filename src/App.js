import './App.css';
import Dashboard from './components/Dashborad';
import Footer from './components/Footer';
import Lotrinh from './components/Lotrinh';
import Menu from './components/Menu';
import Phuhop from './components/Phuhop';
import Queo from './components/Queo';

function App() {
  return (
   <>
    <Menu />
    <Dashboard />
    <Queo />
    <Phuhop />

    <Lotrinh />
    <Footer />
   </>
  );
}

export default App;
