import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { obja} from './Context';
type MyModalDeleteProp={
  myindex:number
}



function MyModalDelete({myindex}:MyModalDeleteProp) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [T, setT] = useState([{}]);
    
    function handleRemove (myindex:number) {

     
      
      T.push( obja);
     
     
      
        obja.splice(myindex,myindex+1);
      
        setT([...T]);
       console.log(myindex);

    setShow(false);
    
    // changes state to `newState` and triggers re-rendering
    
    
    
    }
    
    return (
      <>
       
        {/* <span className="oi oi-trash" onClick={handleShow}></span> */}


        <i className="fas fa-trash" onClick={handleShow} 
        data-toggle="tooltip" data-placement="top" title="Remove"></i>
        {/* <Button variant="primary" onClick={handleShow}>
          Update
        </Button> */}
    
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        Are You Sure That you want delet it ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleRemove(myindex)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 
export default function ModalCompDelete({myindex}:MyModalDeleteProp) {
  
    return (
        <>
            <MyModalDelete myindex={myindex}/>
        </>
    )
}
