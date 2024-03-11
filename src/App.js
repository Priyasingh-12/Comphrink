import Widget from './Component/Widget';
import Comp2 from './Component/Comp2';
  import Comp3 from './Component/Comp3';

import './App.css';

const App = () => {

  return (
    <>
    <div className='containers'>
  <div className='place1'><Widget/></div>  
  <div className='place2'>  <Comp2/></div>  

    </div>
    <div className='box'>
    <Comp3/>
    </div>
   
     
    </>
  );
};

export default App;