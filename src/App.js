/* eslint-disable no-unused-vars */

import './App.css';
//jxs->babel

function App() {
  let firstName = 'Dastan';
  let lastName='Doe';
  let middleName="Joan";
  let qty=5;
  let event="coding party";

  let price=45;
  let ticketAgent='Alex coder';
  //thanks fro ordering 5 tickets event , oder details f and l qty price to event you pick
  //console.log(firstName+","+lastName+"," +middleName)
  const email=`thanks fro ordering ${qty} tickets to ${event} , oder details ${firstName},${lastName}, and l qty price to event you pick in 40 minutes`
  console.log(email);
  console.log(`${firstName}, ${lastName}, ${middleName}`)

  const dataDisplay=function(name){
    console.log(`Hello ${name}`)
    dataDisplay("Joan");
    const show=user=> user
    console.log(show("KO"));

    const car =(make,model,year)=>{
      return {
        make:make,
        model:model,
        year:year
      }
    }
    console.log(car("Toyota","Camry",2018));

    let color=['red','green','black']
    let [a,b,c]=color;
    console.log(b);
  
  }
  const people=[
    {
      Id:1,
      name:'joan',
      lastName:'oss',

    },
    {
      Id:2,
      name:'laks',
      lastName:'aklksk',

    },
    {
      Id:3,
      name:'junior',
      lastName:'ofj',

    }
   
  ];
  const [p1,p2,p3]=people;
  console.log(p1.lastName)

  const dev={
    id:2,
  name:'Alex',
    postation: 'BAeckend',
    salary:150000
  }
  const DisplayDev=({id,name,postation,salary})=>console.log(`${id} ${name} ${salary}`);
  DisplayDev(dev)


  const {id,name,postation,salary}=dev;
  console.log(dev.salary)

  const product={
    id2:23,
    name2:"Pc",
    price1:4500,
    isAvailable:true,
    qty1:24

  }
  const {id2,name2,price1,isAvailable,qty1}=product;
  const displayproduct=(obj)=>{
    console.log(`${id} ${name}`);
  }
  
  return(
  <div> 
     <h1> Hello</h1>
  <h1>Joan</h1>
  </div>
  )
}

export default App;
