import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

type AccordionPropsType = {
    title: string

}

export function UnControlledAccordion(props: AccordionPropsType) {
    /*let [collapsed,setCollapsed] = useState(false)*/
    const [ state, dispatch] = useReducer(reducer, {collapsed:false} )
        return (<div>

            {/*<AccordionTitle  title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle  title={props.title} onClick={() => {dispatch({type:'TOGGLE-COLLAPSED' })}}/>
            { !state.collapsed && <AccordionBody/>}

        </div>)

}

type AccordionTitleType = {
    title:string
    onClick: () => void
}
function AccordionTitle(props:AccordionTitleType) {
    return (<h1 onClick={() => {props.onClick()}} >
            {props.title}
        </h1>
    )

}

function AccordionBody() {
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>

    )
}

