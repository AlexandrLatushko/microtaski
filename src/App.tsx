// import React, {useState} from 'react';
// import { NewComponents } from './components/NewComponents';
// import { TablList } from './components/TablList';

import { useState } from "react";
import { Button } from "./components/Button";
import { NewFelterComponent } from "./components/NewFelterComponent";

type filterType = string;

function App() {
  // const [student, setStudents] = useState([
  //         {id: 1, name: "James", age: 8},
  //         {id: 2, name: "Robert", age: 18},
  //         {id: 3, name: "John", age: 28},
  //         {id: 4, name: "Michael", age: 38},
  //         {id: 5, name: "William", age: 48},
  //         {id: 6, name: "David", age: 58},
  //         {id: 7, name: "Richard", age: 68},
  //         {id: 8, name: "Joseph", age: 78},
  //         {id: 9, name: "Thomas", age: 88},
  //         {id: 10, name: "Charles", age: 98},
  //         {id: 11, name: "Christopher", age: 100},

  //     ]
  // );

  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'},
  //   {manufacturer:'Mini', model: 'cooper'}
  // ]

  // const myFirstSupscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im Vasya!')
  // }

  // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im Bob!')
  // }

  // const onClickHandler = (name:string) => {
  //   console.log(name)
  // }

  // const Button1fFoo = (subscriber:string,age:number,addres:string)=>{
  //     console.log(subscriber, age,addres)
  // }

  // const Button2fFoo = (subscriber:string,age:number,addres:string) =>{
  //     console.log(subscriber, age,addres)
  // }

  // const Button3fFoo = () =>{
  //   console.log("In tuped Button")
  // }

  // let a = 1;

  // let [a, setA] = useState(1);//a- это переменная(состояние), а setA- это функция в которой находится эта переменная (состояние)
  // // 1 в данном случае это начальное состояние а
  // const onClickPlus = ()=>{
  //   setA(++a);
  // }

  // const onClickZero = ()=>{
  //   setA(a = 0);
  // }

  // const currentMoney = money.filter((filteredMoney,)=>{
  //   return(
  //     filteredMoney.banknots==="RUBLS"
  //     )
  // })

    const [money, setMoney] = useState([
        { banknots: "Dollars", value: 100, number: " a1234567890" },
        { banknots: "Dollars", value: 50, number: " z1234567890" },
        { banknots: "RUBLS", value: 100, number: " w1234567890" },
        { banknots: "Dollars", value: 100, number: " e1234567890" },
        { banknots: "Dollars", value: 50, number: " c1234567890" },
        { banknots: "RUBLS", value: 100, number: " r1234567890" },
        { banknots: "Dollars", value: 50, number: " x1234567890" },
        { banknots: "RUBLS", value: 50, number: " v1234567890" },
    ]);

    const [filter, setFilter] = useState<filterType>("all");

    let currentMoney = money;
    if (filter === "RUBLS") {currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS");}
    if (filter === "Dollars") {currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars");}

    const onClickFilterHandler = (name: string) => {
        setFilter(name);
    }; 

    return (
        <div>
        {/* <NewComponents students={ student}/>
            <TablList auto ={topCars}/>
            */}
        {/* <button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChenel-1</button> */}

        {/* <button>MyYouTubeChenel-1</button>;
                <button>MyYouTubeChenel-2</button>   */}
        {/* <Button name={'MyYouTubeChenel 1'} collBack={()=>Button1fFoo("IM Bob", 21, 'Minsk')}/>
                <Button name={'MyYouTubeChenel 2'} collBack={()=>Button2fFoo("IM Jon", 30, 'Grodno')}/>
                <Button name={'MyYouTubeChenel 3'} collBack={Button3fFoo}/>

                <h1>{a}</h1>
                <button onClick={onClickPlus}>num</button>
                <button onClick={onClickZero}>0</button>
                */}

        <NewFelterComponent
            currentMoney={currentMoney}
            onClickFilterHandler={onClickFilterHandler}
        />
        </div>
    );
    }

    export default App;
