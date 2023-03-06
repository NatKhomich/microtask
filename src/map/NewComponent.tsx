import React from 'react';
import s from './NewComponent.module.css'

/*type NewComponentPropsType = {
    students: StudentPropsType[]
}

type StudentPropsType = {
    id: number
    name: string
    age: number
}*/ //map
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

/*type TopCarsPropsType = {
    topCars: Array<AutoPropsType>
}

type AutoPropsType = {
    manufacturer: string
    model: string
}*/ //map

/*const NewComponent = (props: TopCarsPropsType) => { //map
    return (
        <div>
            {props.topCars.map((carElements, index) => {
                return (
                    <table className={s.table}>
                        <th>
                            <td key={index}>
                              Производитель {carElements.manufacturer}
                            </td>
                        </th>
                        <tr>
                            <td key={index}>
                                 Модель {carElements.model}
                            </td>
                        </tr>
                    </table>
                )
            })}
        </div>
    );
};*/
/*










export default NewComponent;*/
