import React from 'react';

export type AccordionPropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    items: Array<ItemType>
    onClick: (value:any) => void
}
export type ItemType = {
    title: string
    value: any
}
export function Accordion(props: AccordionPropsType) {

        return (<div>
            <AccordionTitle title={props.title} onClick = {props.onChange} />
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </div>)

}
 type AccordionTitleType = {
    title: string
     onClick: () => void
 }
function AccordionTitle({title , onClick}:AccordionTitleType) {

    return (<h1 onClick={onClick}>

            {title}
        </h1>
    )

}
type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props:AccordionBodyType) {

    return (

        <ul>
            {props.items.map((el,index )=> <li onClick={() => props.onClick(el.value)} key={index}>{el.title}</li>)}
        </ul>

    )
}

