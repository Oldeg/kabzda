import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './select.module.css'


export type SelectType = {
    items: Array<ItemType>
    value: number
    onChange: (value: any) => void

}
const Select = (props: SelectType) => {
        const selectedItems = props.items.find(i => i.value === props.value)

        const [active, setActive] = useState(false)
        const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
        const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
        const toggleItems = () => {
            setActive(!active)
        }
        const onClickHandler = (value: any) => {
            props.onChange(value)
            toggleItems()
        }
        const onKeyPress = (value: any, key: string) => {
            console.log(key)
            if (key === 'Enter') {
                props.onChange(value)
                toggleItems()
            }

        }
        useEffect(() => {
            setHoveredElementValue(props.value)
        },[props.value])
        const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
                for (let i = 0; i < props.items.length; i++) {
                    if (props.items[i].value === hoveredElementValue) {
                        const pretendentElement  = e.key === 'ArrowDown'
                            ? props.items[i + 1]
                            : props.items[i - 1]
                        if (pretendentElement) {
                            props.onChange(pretendentElement.value)
                            return
                        }

                    }
                }
            }
            if( e.key === 'Escape' || e.key === 'Enter') {
                setActive(false)
            }
            if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
                e.key === 'ArrowDown'
                    ? setHoveredElementValue(props.items[0].value)
                    : setHoveredElementValue(props.items[props.items.length - 1].value)
            }

        }
        return (
            <div>
                <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                    <span onClick={toggleItems} className={s.main}>{selectedItems && selectedItems.title}</span>
                    {active &&
                        <div className={s.items}>
                            {props.items.map(i => <div onMouseEnter={() => setHoveredElementValue(i.value)}
                                                       className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                                       key={i.value}
                                                       tabIndex={i.value}
                                                       onKeyDown={(e) => onKeyPress(i.value, e.key)}
                                                       onClick={() => {
                                                           onClickHandler(i.value)
                                                       }}>{i.title}</div>)}
                        </div>}

                </div>
            </div>
        );
    }
;

export default Select;