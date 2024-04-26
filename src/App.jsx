
import AOS from 'aos'
import 'aos/dist/aos.css'
import Explore from './components/Explore/Explore';
import Launch from './pages/Launch';
;
AOS.init();


const App = () => {
  return (
  <Launch/>  
  )
}

export default App