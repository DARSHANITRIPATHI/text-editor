
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



      function App() {
        const [mode, setMode] = useState('light');//whether dark mode is enabled or not
        const [alert, setAlert] = useState(null);

        const showAlert = (message,type)=>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(()=>{
            setAlert(null);
          }, 2000 )

        }

      const toggleMode = ()=>{
        if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#042743';
        showAlert("dark Mode has been enabled","success");
        // document.title='Textutils -Dark Mode';
      }
        else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert("light Mode has been enabled","success");
        // document.title='Textutils -Light Mode';
        }
      }

   return (
     <>  
    
      {/* <Navbar title="Textutils" aboutText="About TextUtils" />  */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils"  mode={mode}  toggleMode={toggleMode} /> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch> 
             <Route  exact path="/about">
             <About mode={mode}/>
           </Route>
           <Route  exact path="/">
              <Textform  showAlert={showAlert} heading="TextUtils - Word counter,character counter " mode={mode} />
           </Route>
       </Switch> 
        </div>
        </Router>
       </> 
        
    

  );
}

export default App;
