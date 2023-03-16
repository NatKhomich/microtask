import React, {useState} from 'react';
import './App.css';
import Filter from './filter/Filter';
import NewComponent from './map/NewComponent';
import UseState from './useState/UseState';
import Button from './button/Button';
import {FullInput} from './input/fullinput/FullInput';
import {Input} from './input/Input';
import {ButtonInput} from './input/Button';


function App() {

    const topCars = [ //map
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const Button1 = (subscriber: string) => {
        console.log(subscriber)
    }

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    let [title, setTitle] = useState('')
    console.log(title)

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <>
            <NewComponent topCars={topCars}/>
            <Button name={'Кнопка'} callBack={() => Button1('Im Natalia')}/>
            <UseState/>
            <Filter/>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input  setTitle = {setTitle} title = {title}/>
            <ButtonInput name={ '+' } callBack={ callBackButtonHandler }/>

            <div> {/*FullInput*/}
                {message.map((el, index) => {
                    return (
                        <div key={index}> {el.message} </div>
                    )
                })}
            </div>

        </>
    )
}

export default App;
