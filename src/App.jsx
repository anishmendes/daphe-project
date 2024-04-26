
import AOS from 'aos'
import 'aos/dist/aos.css'
import Explore from './components/Explore/Explore';
import Launch from './pages/Launch';
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
       {/* <Route path='/team' compoenent={Team}/>     */}
       <Route exact  path='/explore' component={Explore}/>
     
 </Switch>
      </Router>
      </>
  ) 
}

export default App