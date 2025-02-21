import './App.css';
import Dangki from './components/Dangki';
import Dashboard from './components/Dashborad';
import Footer from './components/Footer';
import Lotrinh from './components/Lotrinh';
import Menu from './components/Menu';
// import Phone from './components/Phone';
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
    <Dangki />
    {/* <Phone /> */}
    <Footer />
   </>
  );
}

export default App;
