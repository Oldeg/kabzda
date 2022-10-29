import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    on: boolean
    onClick: () => void
    title: string
}
export const OnOff = ({on, onClick, title}: OnOffType) => {
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }
    return (
        <div>
            <span style={{marginRight: '10px', fontWeight: 'bold'}}>{title}</span>
            <div style={onStyle} onClick={onClick}>On</div>
            <div style={offStyle} onClick={onClick}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};




