import React from 'react';
import './App.css';
import Button from "./button/Button";

/*import NewComponent from "./map/NewComponent";*/

function App() {
    /*const students = [ //map
        {id: 1, name: "James", age: 8},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]*/
    /*const topCars = [ //map
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );*/

    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber,age)
    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Im Stupid Button')
    }

    return (
        <div className='App'>
            <Button name={'MyYouTubeChanel - 1'} callBack={()=> Button1Foo('Im Vasya', 21)}/>
            <Button name={'MyYouTubeChanel - 2'} callBack={()=>Button2Foo('Im Alex')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>
            );
}

export default App;
