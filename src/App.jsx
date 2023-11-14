import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';


function App() {

  return (
   <div className='font-font1'>
  
     <Router>
      <NavBar/>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
       </Routes>
     </Router>
   </div>
  )
}

export default App
