import React, { useState} from 'react';
import './App.css';

import {OnOff} from './Components/OnOff/OnOff';
import {UnControlledAccordion} from './Components/UncontrolledAccordion/UnControlledAccordion';
import {UncontrolledRating} from './Components/UncontrolledRating/UncontrolledRating';
import {AccordionM} from './Components/Accordion/Accordion';
import Select from "./Components/Select/Select";
import Clock from "./Components/Clock/Clock";


function App() {
    let [accCol, setAccCol] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(true)
    const onChangeSelect = () => {
    }


    return (
        <div className="App">
            <AccordionM title={'Accordion'} onClick={(value: any) => alert(value)} onChange={() => {
                setAccCol(!accCol)
            }} collapsed={accCol}
                        items={[{value: 1, title: 'Maks'}, {value: 2, title: 'Nick'}, {value: 3, title: 'Bob'}]}/>
            <UnControlledAccordion title={'Menu'}/>
            <OnOff onClick={() => {
                setOn(!on)
            }} title={'OnOff'} on={on}/>
            {/*<UncontrolledOnOff />*/}
            <UncontrolledRating/>
            <Select items={[{value: 1, title: 'Minsk'}, {value: 2, title: 'Moscow'}, {value: 3, title: 'Warshaw'},]}
                    value={1} onChange={onChangeSelect}/>
            <Clock />
        </div>

    )
}

export default App;




