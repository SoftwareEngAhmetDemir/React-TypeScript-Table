import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dashboard } from './Components/DashBoard';
import Transictions from './Components/Transictions';
import Accounts from './Components/Accounts';
import Settings from './Components/Settings';
import { Provider } from 'react-redux'
import {store} from './Store/Store';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
  return (
    <div className="App">


{/* NavBar */}
<Router>

<div id="navbar">
          <div>
              <Link  style={{textDecoration:'none',color:'black'}}  to="/DashBoard">DashBorad</Link>
              </div>
              <div >
              <Link style={{textDecoration:'none',color:'black'}} to="/Transictions">Transictions</Link>
              </div>
              <div>
              <Link style={{textDecoration:'none',color:'black'}}  to="/Accounts">Accounts</Link>
              </div>

              <div>
              <Link style={{textDecoration:'none',color:'black'}}  to="/Settings">Settings</Link>
              </div>
        </div>

        <Switch>
          <Route path="/DashBoard" component={Dashboard}/>
            
          <Route path="/Transictions" >
         
            <Transictions/>
            </Route>
          <Route path="/Accounts" component={Accounts}/>
          <Route path="/Settings" component={Settings}/>
        </Switch>


</Router>
{/*NavBar....  */}
{/*  */}

{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}





{/*  */}
      {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
      {/*  */}
    </div>
  );
}
type myAppProps = {
  title: string,
  
}
const  myApp=()=>{
 

  return ( 
    
<div>
<Provider store={store}>

<App />
</Provider>
 
</div>
 
 
 );
}

export default myApp;
