import React, {useState} from 'react';

import {Story} from "@storybook/react";
import Select, {SelectType} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

const Template: Story<SelectType> = (args) => <Select {...args} />
export const SelectMode = Template.bind({})

SelectMode.args = {
    items: [{value:1, title:'Minsk'},{value:2, title:'Moscow'},{value:3, title:'Warshaw'} ],
    value:3
}


export const SelectChanging = () => {
    let [value,setValue] = useState(2)
    return <Select items={[{value:1, title:'Minsk'},{value:2, title:'Moscow'},{value:3, title:'Warshaw'} ]} value={value} onChange={setValue} />

}