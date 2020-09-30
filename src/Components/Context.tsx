import { useState } from "react";
import React from 'react'
import moment from "moment-timezone";
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


let date:Date = new Date();  
// let obj =   new Transiction_Table(1,'ahmed','ddd',Date.parse('1.08.2019'),240,'Dollar');
console.log(new Date());
let obja:Array<Transiction_Table>=[];
obja.push(new Transiction_Table(1,'ahmed1','ddd',new Date(),240,'USD'));

obja.push(new Transiction_Table(2,'ahmed2','ddd',date,245,'EUR'));
obja.push(new Transiction_Table(3,'ahmed3','ddd',date,248,'TRY'));
obja.push(new Transiction_Table(4,'ahmed4','ddd',date,247,'TRY'));
obja.push(new Transiction_Table(5,'ahmed5','ddd',date,290,'TRY'));



export  {obja};


