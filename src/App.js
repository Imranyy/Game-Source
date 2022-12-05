import './css/App.css';
import './css/responsive.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DownloadPage from './pages/DownloadPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App=()=>{
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/download' element={<DownloadPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    <Footer/>
  </Router>
  );
}
 
export default App;
