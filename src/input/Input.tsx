import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props: InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
            <input className={s.input}
                   value={props.title} onChange={onChangeInputHandler}/>
    );
};
