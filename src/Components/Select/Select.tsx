import React, {useState} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './select.module.css'

export type SelectType = {
    items: Array<ItemType>
}
const Select = (props: SelectType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('Add')
    const collapseChanger = () => setCollapsed(!collapsed)
    const selectedItem  = (title: string) => {
        setSelected(title)
    setCollapsed(!collapsed)}

    return (
        <div>
            <div className={s.titleDiv} onFocus={collapseChanger} tabIndex={0} >{selected}</div>
            {collapsed && <div className={s.items} onBlur={collapseChanger} tabIndex={5}>{props.items.map(it => <li onClick={() => selectedItem(it.title)} tabIndex={it.value} ><a>{it.title}</a></li>)}</div>}
        </div>
    );
};

export default Select;