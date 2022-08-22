import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,useLocation,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from 'Pages/Contact'
import Login from 'Pages/Login'
import Register from 'Pages/Register'
import Register2 from 'Pages/Register2'
import Base from 'Routes/BaseRoutes'
import Shop from 'Pages/Shop'
import Profile from 'Pages/Profile'
import Blog from 'Pages/Blog'
import Reset from 'components/ResetPassword/index'
import Details from 'Pages/ProductDetails'
import {AnimatePresence} from 'framer-motion'
import BDetails from 'Pages/BlogDetails'


function App() {

  useEffect(()=>
  {
    
    if (JSON.parse(localStorage.getItem("basket")===null))
    {
      localStorage.setItem("basket",JSON.stringify([])) 
    }
  },[])

  let location = useLocation()

  return (
    <div className="App">
        <AnimatePresence>

        <Routes  location={location} key={location.key}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Base><Home/></Base>}/>
          <Route path='/details/:id' element={<Base><Details/></Base>}/>
          <Route path='/profile' element={<Base><Profile/></Base>}/>
          <Route path='/reset' element={<Base><Reset/></Base>}/>
          <Route path='/blog' element={<Base><Blog/></Base>}/>
          <Route path='/blog/:id' element={<Base><BDetails/></Base>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/registers2' element={<Register2/>}/>
          <Route path='/contact' element={<Base><Contact/></Base>}/>
          <Route path='/shop' element={<Base><Shop/></Base>}/>

        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
