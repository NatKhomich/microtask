import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack() //кнопка обрабатывает нажатие
    }
    return (
        <div style={{marginTop: '30px'}}>
            <button onClick={onClickHandler}> {props.name} </button>
        </div>
    );
};

export default Button;