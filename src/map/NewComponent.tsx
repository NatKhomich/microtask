import React from 'react';
import s from './NewComponent.module.css'

/*type NewComponentPropsType = {
    students: StudentPropsType[]
}
type StudentPropsType = {
    id: number
    name: string
    age: number
/*
const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span> {objectFromStudentArray.name} </span>
                            <span> {objectFromStudentArray.age} </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};*/

type TopCarsPropsType = {
    topCars: Array<AutoPropsType>
}

type AutoPropsType = {
    manufacturer: string
    model: string
}

const NewComponent = (props: TopCarsPropsType) => {
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

    return (
        <div>
            {props.topCars.map((carElements, index) => {
                return (
                    <table key={index} className={s.table}>
                        <thead>
                            <tr>
                                <td key={index}>
                                    Производитель {carElements.manufacturer}
                                </td>
                            </tr>
                            <tr>
                                <td key={index}>
                                    Модель {carElements.model}
                                </td>
                            </tr>
                        </thead>
                    </table>
                )
            })}
        </div>
    );
};



export default NewComponent;
