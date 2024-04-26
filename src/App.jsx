
import AOS from 'aos'
import 'aos/dist/aos.css'
import Explore from './components/Explore/Explore';
import Launch from './pages/Launch';
import Navbar from '@/components/Global/Navbar'
;

import {
  BrowserRouter as Router,
 
  Route,
  
  Switch,
} from "react-router-dom";

AOS.init();


const App = () => {
  return (
    <>
  <Router>
    <Navbar/>
 <Switch>
  
      <Route exact path='/' component={Launch}/>
       {/* <Route exact path='/team' compoenent={Team}/>     */}
       {/* <Route exact path='/research' compoenent={Research}/>     */}
       <Route exact  path='/explore' component={Explore}/>
     
 </Switch>
      </Router>
      </>
  ) 
}

export default App