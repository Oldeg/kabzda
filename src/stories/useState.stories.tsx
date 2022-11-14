import React, { useState} from "react";


export default {
    title: 'useState demo'
}

const initialValue = () => {
    return 1
}

export const LikeUseCallback= () => {
    console.log('useState')
    const [counter, setCounter] = useState(initialValue)


    return <div>
        <button onClick={() =>setCounter(state=> state +1 )}>+</button>
        {counter}

    </div>
}



