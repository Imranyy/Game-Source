import './css/App.css';
import './css/responsive.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
const App=()=>{
  return (
    <Router>
      <Toaster/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/game/:id' element={<GamePage/>}/>
            <Route path='/about' element={<LandingPage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
  </Router>
  );
}
 
export default App;
