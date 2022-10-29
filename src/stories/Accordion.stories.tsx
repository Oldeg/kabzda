import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('Accordion mode change event fired')
const onClickCallBack = action('some item was clicked')
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    title: 'Menu',
    onChange: callback ,
    collapsed: false,
    items: [{value:1, title:'Maks'},{value:2, title:'Nick'},{value:3, title:'Bob'} ],
    onClick: onClickCallBack
}
export const MenuUncollapsedMode = Template.bind({})
MenuUncollapsedMode.args = {
    title: 'Menu',
    onChange: callback ,
    collapsed: true,
    items: [{value:1, title:'Maks'},{value:2, title:'Nick'},{value:3, title:'Bob'}],
    onClick: onClickCallBack
}
export const UserModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={'Users'} onClick={onClickCallBack} onChange={() => setValue(!value)} collapsed={value} items={[{value:1, title:'Maks'},{value:2, title:'Nick'},{value:3, title:'Bob'}]} />
}