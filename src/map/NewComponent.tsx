import React from 'react';
import s from './NewComponent.module.css'

type TopCarsPropsType = {
    topCars: AutoPropsType[]
    students: StudentsPropsType[]
}

type StudentsPropsType = {
    id: number
    name: string
    age: number
}

type AutoPropsType = {
    manufacturer: string
    model: string
}

const NewComponent = (props: TopCarsPropsType) => {

    return (
        <div>
            <div>
                <ul>
                    {props.students.map( el => {
                        return (
                            <li key={el.id}>
                                <span> {el.id} </span>
                                <span> {el.name} </span>
                                <span> {el.age} age </span>
                            </li>
                        )
                    } )}
                </ul>
            </div>

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
