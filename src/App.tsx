import React, {useState} from 'react';
import './App.css';
/*import Button from "./button/Button";
import UseState from "./useState/UseState";*/

/*import NewComponent from "./map/NewComponent";*/

type FilterPropsType = 'all' | 'RUBLS' | 'Dollars'

function App() {
    //map---------------------------------------------------------
    /*const students = [ //map
        {id: 1, name: "James", age: 8},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]*/
    /*const topCars = [ //map
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );*/
    //------------------------------------------------------------

    //button------------------------------------------------------
    /*const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber,age)
    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Im Stupid Button')
    }

    return (
        <div className='App'>
            <Button name={'MyYouTubeChanel - 1'} callBack={()=> Button1Foo('Im Vasya', 21)}/>
            <Button name={'MyYouTubeChanel - 2'} callBack={()=>Button2Foo('Im Alex')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>
            );*/
    //------------------------------------------------------------

    //useState----------------------------------------------------
    /*return(
        <UseState />
    )*/
    //------------------------------------------------------------
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterPropsType>('all')

    let currentMoney = money

    if (filter ==='Dollars') {
        currentMoney = money.filter(filterMoney => filterMoney.banknots === 'Dollars')
    } else if (filter ==='RUBLS') {
        currentMoney = money.filter(filterMoney => filterMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }

    return(
        <>
        <ul>
            {currentMoney.map((objFromMoneyArr,index) => {
                return(
                    <li key={index}>
                        <span> {objFromMoneyArr.banknots} </span>
                        <span> {objFromMoneyArr.value} </span>
                        <span> {objFromMoneyArr.number} </span>
                    </li>
                )
            })}
        </ul>
            <div style={{marginLeft: '35px'}}>
        <button onClick={()=> onClickFilterHandler('all')}> all </button>
        <button onClick={()=> onClickFilterHandler('RUBLS')}> ruble </button>
        <button onClick={()=> onClickFilterHandler('Dollars')}> dollar </button>
            </div>
        </>
    )
}

export default App;
