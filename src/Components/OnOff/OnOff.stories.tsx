import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff ',
    component: OnOff,
}
const callback = action('on or off clicked')
export const OnMode = () => <OnOff on={true} onClick={callback} title={'OnOff'} />
export const OffMode = () => <OnOff on={false} onClick={callback} title={'OnOff'} />

export const ModeChanging  = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={() => setValue(!value)} title={'OnOff'} />
}