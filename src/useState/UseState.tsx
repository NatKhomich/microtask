import React, {useState} from 'react';

const UseState = () => {

    let [a, SetA] = useState(0)

    const onClickHandler = () => {
        SetA(num => num + 1)
    }
    const onClickDeleteHandler = () => {
        SetA(0)
    }
    return (
        <div>
            <h1> {a} </h1>
            <button onClick={onClickHandler}> number</button>
            <button onClick={onClickDeleteHandler}> delete</button>
        </div>
    );
};

export default UseState;