import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';


function App() {

  return (
   <div className='font-font1'>
  
     <Router>
      <NavBar/>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
       </Routes>
       <Footer/>
     </Router>
   </div>
  )
}

export default App
