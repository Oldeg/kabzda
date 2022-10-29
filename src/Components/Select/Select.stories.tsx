import React from 'react';

import {Story} from "@storybook/react";
import Select, {SelectType} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

const Template: Story<SelectType> = (args) => <Select {...args} />
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    items: [{value:1, title:'Maks'},{value:2, title:'Nick'},{value:3, title:'Bob'} ],

}