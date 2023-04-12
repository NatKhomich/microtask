import React from 'react';
import './App.css';
import UseState from './useState/UseState';
import Map from './map/Map';
import {Filter} from './filter/Filter';
import InputComponent from './input/InputComponent';


function App() {

    return (
        <>
            <Map />
            <Filter />
            <UseState />
            <InputComponent />
        </>
    )
}

export default App;
