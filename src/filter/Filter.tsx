import React, {useState} from 'react';
import button from '../button/Button';

type FilterPropsType = 'All' | 'Rubles' | 'Dollars'

const Filter = () => {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: 'a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterPropsType>( 'All')

    let currentMoney = money

    if (filter==='Rubles') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknotes === 'Rubles')
    } else if (filter==='Dollars') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknotes === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }


    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '30px'}}>
                <button onClick={()=>onClickFilterHandler('All')}> All</button>
                <button onClick={()=>onClickFilterHandler('Rubles')}> Rubles</button>
                <button onClick={()=>onClickFilterHandler('Dollars')}> Dollars</button>
            </div>
        </div>
    );
};

export default Filter;