import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import {obja} from './Context';
type MyModalUpdateProp={
  myindex:number
}
function MyModalUpdate({myindex}:MyModalUpdateProp) {
 
  const refName = React.createRef<HTMLInputElement>();

const refDescription = React.createRef<HTMLInputElement>();

const refDate = React.createRef<HTMLInputElement>();

const refAmount = React.createRef<HTMLInputElement>();

const refMoney = React.createRef<HTMLSelectElement>();


const [y,x] = useState(0);
const [show, setShow] = useState(false);
//////////////////////////////

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('insinde the update comp ' , myindex);
    
    
  function  updateValues()
  {
    if(refName.current&&(refName.current.value===''||refName.current.value===null))
    {
    obja[myindex].name=obja[myindex].name;
    }
    else
  if(refName.current){
obja[myindex].name = refName.current.value;
  }

  if(refDescription.current&&(refDescription.current.value===''||refDescription.current.value===null))
  {
  obja[myindex].description=obja[myindex].description;
  }
  else
if(refDescription.current)

obja[myindex].description = refDescription.current.value;

if(refAmount.current&&(refAmount.current.value===''||refAmount.current.value===null))
{
obja[myindex].amount=obja[myindex].amount;
}
else
if(refAmount.current)
obja[myindex].amount = Number(refAmount.current.value);
if(refDate.current&&(refDate.current.value===''||refDate.current.value===null||refDate.current.value.toUpperCase()[0]==='I'))
{
obja[myindex].date=obja[myindex].date;
}
else
if(refDate.current)
  {
  
  
    obja[myindex].date  = new Date(Date.parse(refDate.current.value));

  }

let Money = '';
  if(refMoney.current)
  {
    Money = refMoney.current.value;
  }



  }
    
  
    return (
      <>
          <i className="fas fa-edit" onClick={handleShow} 
           data-toggle="tooltip" data-placement="top" title="Update"></i>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <label> Name: {obja[myindex].name}</label>
          <input type="text" className="form-control"
     id="name" ref={refName} aria-describedby="Name" placeholder="Enter New Name" 
     />

    <label >Description: {obja[myindex].description}</label>
<input type="text" className="form-control"
     id="Desc" ref={refDescription}
      aria-describedby="Description" 
     placeholder="Enter New Description"/>
<label > Date: {JSON.stringify(obja[myindex].date).slice(9,11)}.
{JSON.stringify(obja[myindex].date).slice(6,8)}.{JSON.stringify(obja[myindex].date).slice(1,5) }
</label>
<input type="date" className="form-control"
     id="date" ref={refDate}  data-date-format="YYYY.MM.DD"
      aria-describedby="Description" 
     placeholder="Enter New Date"/>
     
    <label >Amount : {obja[myindex].amount}</label>
<input type="number" className="form-control"
     id="Amount" ref={refAmount}
      aria-describedby="Amount" 
     placeholder="Enter New Amount"/>
<label>Currency</label>

<select className="browser-default custom-select custom-select-lg mb-3" 
defaultValue={obja[myindex].currency} ref={refMoney} >
 
  <option  value="TRY">TRY</option>
  <option  value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>updateValues()}>
             Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );



  }
export default function ModalCompUpdate({myindex}:MyModalUpdateProp) {
  console.log('insinde the update comp ' , myindex);
    return (
        <>
            <MyModalUpdate myindex={myindex}/>
        </>
    )
}
