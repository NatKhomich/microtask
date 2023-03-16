import React, {ChangeEvent, useState} from 'react';
import s from './FullInput.module.css'

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        console.log(title)
    }

    const onclickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div className={s.btn1}>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onclickButtonHandler}> +</button>
        </div>
    );
};