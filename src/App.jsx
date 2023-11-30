import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Download from './pages/Download';
import Purchase from './pages/Purchase';
import Terms from './pages/Terms';


function App() {

  return (
   <div className='font-font1 relative overflow-x-hidden'>
  
     <Router>
      <NavBar/>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/terms' element={<Terms/>}/>
       </Routes>
       <Footer/>
     </Router>
   </div>
  )
}

export default App
