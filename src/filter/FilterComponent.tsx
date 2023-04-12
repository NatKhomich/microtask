import React, {useState} from 'react';
import {FilterPropsType, MoneyPropsType} from './Filter';

type FilterComponentType = {
    money: MoneyPropsType[]
    onClickFilter: (nameButton: FilterPropsType)=> void
}


const FilterComponent = (props: FilterComponentType) => {

    const AllOnClickFilterHandler = () => {
        props.onClickFilter('All')
    }

    const RublesOnClickFilterHandler = () => {
        props.onClickFilter('Rubles')
    }

    const DollarsOnClickFilterHandler = () => {
        props.onClickFilter('Dollars')
    }

    return (
        <div>
            <ul>
                {props.money.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknotes} </span>
                            <span>{el.value} </span>
                            <span>{el.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '30px'}}>
                <button onClick={AllOnClickFilterHandler}> All</button>
                <button onClick={RublesOnClickFilterHandler}> Rubles</button>
                <button onClick={DollarsOnClickFilterHandler}> Dollars</button>
            </div>
        </div>
    );
};

export default FilterComponent;