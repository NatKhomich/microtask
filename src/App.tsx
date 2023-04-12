import React, {useState} from 'react';
import './App.css';
import UseState from './useState/UseState';
import Button from './button/Button';
import {Input} from './input/Input';
import {ButtonInput} from './input/Button';
import Map from './map/Map';
import {Filter} from './filter/Filter';


function App() {


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
            <Map />

            <Filter />

            <Button name={'Кнопка'} callBack={() => Button1('Im Natalia')}/>
            <UseState/>

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
