import  { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap';
import { render } from 'react-dom';
import { createLogicalAnd } from 'typescript';
import { setFlagsFromString } from 'v8';
import {obja} from './Context';
import ModalCompDelete from './ModalCompDelete';
import ModalCompUpdate from './ModalCompUpdate';
import * as React from 'react';
import {NoteState} from '../Store/Store';
class Transiction_Table{
    id:number;
    name: string;
 description: string;
 date: Date;
 amount: number; 
currency: string='TRY' ;

constructor(id:number,name:string,description:string,date:Date,amount:number,cur:string){
this.id=id;
this.name=name;
this.description=description;
this.date=date;
this.amount=amount;
this.currency = cur;
}
}
let count = 0;


export default function Transictions() {

  const [Up,setUP] = React.useState(0);
  const [namec,setnameC] = React.useState('black');
  function f(index:number):number{
   
     setUP(Up+1);
console.log(index);
    return index;
  }

///////////
 const refName = React.createRef<HTMLInputElement>();

const refDescription = React.createRef<HTMLInputElement>();

const refDate = React.createRef<HTMLInputElement>();

const refAmount = React.createRef<HTMLInputElement>();

const refMoney = React.createRef<HTMLSelectElement>();
    // ///////////////////////////////////////

console.log(obja)

    
 console.log('new one ',obja)
  
    const [T, setT] = useState([{}]);



    // let date: Date = new Date();  
    // console.log(T[0].date.getDay()+' - '+ T[0].date.getMonth()+ ' - '+T[0].date.getFullYear());
    const [showAdd, setShowAdd] = useState(false);
  
    

    function Example() {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          <button  onClick={handleShow} style={{position:'relative',top:'25%',left:'45%'}} >
            + New Transiction
          </button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}  
          >
            <Modal.Header closeButton>
              <Modal.Title>New Transiction!</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <label >Name</label>
    <input type="text" className="form-control" style={{borderColor:`${namec}`}}
     id="name" ref={refName} aria-describedby="Name" placeholder="Enter Name"/>

<label >Description</label>
<input type="text" className="form-control"
     id="Desc" ref={refDescription}
      aria-describedby="Description" 
     placeholder="Enter Description"/>

<label >Transiction Date</label>
<input type="date" className="form-control"
     id="date" ref={refDate}  data-date-format="YYYY.MM.DD"
      aria-describedby="Date" 
     placeholder="Enter Date"/>
     
     <label >Amount</label>
<input type="number" className="form-control"
     id="Amount" ref={refAmount}
      aria-describedby="Amount" 
     placeholder="Enter Amount"/>
<label>Currency</label>
<select className="browser-default custom-select custom-select-lg mb-3" 
defaultValue="TRY" ref={refMoney} >
 
  <option selected value="TRY">TRY</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>handleAdd()}>ADD</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    




 function handleAdd (){
let name:string = '';
let Description:string = '';
let date1: Date = new Date();
let Amount:number = -1;
let Money:string = '';

  if(refName.current){

if(refName.current.value==='')
{
  refName.current.focus();
 
  refName.current.style.borderColor='red';
 
}
    name = refName.current.value;
  }
  
  if(refDescription.current)
  {
    Description = refDescription.current.value;
  }
  if(refDate.current)
  {
  if(refDate.current.value==='')
  {
    date1 = new Date();
  }
  else
    date1 = new Date(Date.parse(refDate.current.value));

  }

  if(refAmount.current)
  {
    Amount =Number( refAmount.current.value);
  }
if(refMoney.current)
{
  Money = refMoney.current.value;
}
let t1,t2;
t1=t2=false;
if(refName.current&&refName.current.value===''){
alert('Name Is Required');
t1 = true;
}
if(refAmount.current&&refAmount.current.value===''){
  alert('Amount Is Required');
  refAmount.current.style.borderColor = 'red';
  t2=true;
  }
  if(!t1&&!t2)
  {
  obja.push(new Transiction_Table(obja.length+1,name,Description,date1, Amount,Money));
    setT([]);
  }
  }
  
   const [show, setShow] = useState(false);
  
    

  function handleRemove (index:number){
   
   
  let t= window.confirm('Are You Sure ?');
  
   if(t===true){
  delete  obja[index];

    setT([]);
   }
  }
  
    return (
       <div style={{position:'absolute',top:'1%',left:'18%',width:'75%'}}>


          <Example />
           <h1>Transiction</h1>
<div style={{height:'400px' , overflow:'auto'}}>
  

{/* Table */}

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Description</th>
      <th>Transiction Date</th>
      <th>Amount</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  
      {obja.map((e,index)=>{


 return    <tr key={index}>
 
      <td>{e.id}</td> {/* {index+1}*/}
      <td>{e.name}</td>
      <td>{e.description}</td>
    
      <td>{JSON.stringify(e.date).slice(9,11)}.{JSON.stringify(e.date).slice(6,8)}.{JSON.stringify(e.date).slice(1,5) } 
      
       </td> 
      <td>{e.currency+' '+e.amount}</td>
      <td colSpan={2} style={{width:'20%'}}>
      <i onClick={()=>f(index)}>
      <ModalCompUpdate myindex={index}/>
      
      </i>
    
       <div style={{display:'inline-block',width:'20%'}}></div> 
      
   <i className="fas fa-trash" data-toggle="tooltip" data-placement="top"   title="Remove"
    onClick={()=>handleRemove(index)}></i>
        </td>
      
    
    </tr> 
   }) 
 }
  </tbody>
</Table>

{/* Table */}
</div>


       </div>
    )
}
