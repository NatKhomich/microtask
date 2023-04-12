import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

const InputComponent = () => {

    let [title, setTitle] = useState('')
    console.log(title)

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButton = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <Input setTitle={setTitle} title={title} />
            <Button name={' + '} callBack={callBackButton} />

            <div>
                {message.map((el, index)  => {
                    return (
                        <div key={index}>
                            {el.message}
                        </div>
                    )
                } )}
            </div>

        </div>
    );
};

export default InputComponent;