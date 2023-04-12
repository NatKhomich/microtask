import React, {useState} from 'react';
import FilterComponent from './FilterComponent';

export type FilterPropsType = 'All' | 'Rubles' | 'Dollars'

export type MoneyPropsType = {
    banknotes: 'Dollars' | 'Rubles'
    value: number
    number: string
}

export const Filter = () => {

    const [money, setMoney] = useState<MoneyPropsType[]>([
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
        currentMoney = money.filter((el) => el.banknotes === 'Rubles')
    } else if (filter==='Dollars') {
        currentMoney = money.filter((el) => el.banknotes === 'Dollars')
    }

    const onClickFilter = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }

    return (
        <FilterComponent money={currentMoney}
                         onClickFilter={onClickFilter} />
    );
};
