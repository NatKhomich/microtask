import React, {useState} from 'react';

const UseState = () => {
    //let a = 1
    let [a, SetA] = useState(0)

    const onClickHandle = () => {
        SetA(++a)
    }
    const onClickDelete = () => {
        SetA(a-a)
    }
    return (
        <div>
            <h1> {a} </h1>
            <button onClick={onClickHandle}> number</button>
            <button onClick={onClickDelete}> delete</button>
        </div>
    );
};

export default UseState;