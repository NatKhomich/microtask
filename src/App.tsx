import React, {useState} from 'react';
import './App.css';
import Filter from './filter/Filter';
import NewComponent from "./map/NewComponent";
import UseState from './useState/UseState';
import Button from './button/Button';



function App() {

    const topCars = [ //map
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const Button1 = (subscriber: string) => {
        console.log(subscriber)
    }

    return (
        <>
            <NewComponent topCars={topCars}/>
            <Button name={'Кнопка'} callBack={()=>Button1('Im Natalia')} />
            <UseState />
            <Filter />
        </>
    )
}

export default App;
