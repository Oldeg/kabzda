import React, {ChangeEvent, useMemo, useState} from 'react';


export default {
    title: 'UseMemoHW'
}
let countries = [
    {
        id: 1, title: 'America', cities:
            [{title: 'NewYork', citizens: 8467513, square: 1223},
                {title: 'Chicago', citizens: 7352610, square: 835},
                {title: 'LosAngeles', citizens: 5374026, square: 1100}]

    },
    {
        id: 2, title: 'Russia', cities:

            [{title: 'Moscow', citizens: 12567324, square: 1200},
                {title: 'SanctPeterburg', citizens: 7238477, square: 998},
                {title: 'Bryansk', citizens: 1200000, square: 320}]


    },
    {
        id: 3, title: 'Poland', cities:
            [{title: 'Warshaw', citizens: 6367513, square: 1123},
                {title: 'Wroclaw', citizens: 2737128, square: 645},
                {title: 'Gdansk', citizens: 5362701, square: 892}]


    },

]

export const ExampleStories = () => {
    const [counter, setCounter] = useState<number>(0)
    let citizensNumber = 6000000;
    let sizeOfSquare = 1000;
    let firstLetter = 'W'
    const  changeCitizensNumber = (e: ChangeEvent<HTMLInputElement>) => {
        citizensNumber = +e.currentTarget.value
    }
    const  changeSquareNumber = (e: ChangeEvent<HTMLInputElement>) => {
        sizeOfSquare = +e.currentTarget.value
    }
    const  changeFirstLetter = (e: ChangeEvent<HTMLInputElement>) => {
        firstLetter = e.currentTarget.value
    }
    const onClickHandlerC = () => {
        setCounter(counter => counter + 1)
    }

    let numberCitizens = useMemo(() => {
        console.log('citizens')
        return countries.map(el => el.cities.filter(el => el.citizens > citizensNumber))
    }, [citizensNumber])
    let squareSize = useMemo(() => {
        console.log('square')
        return countries.map(el => el.cities.filter(el => el.square > sizeOfSquare))
    }, [sizeOfSquare])
    let nameWithA = useMemo(() => {
        console.log('name')
        return countries.map(el => el.cities.filter(el => el.title.startsWith(firstLetter)))
    }, [firstLetter])
    return (
        <div>
            <select>
                {numberCitizens.map(el => el.map(el => <option>{el.title}</option>))}
            </select>
            <select>
                {squareSize.map(el => el.map(el => <option>{el.title}</option>))}
            </select>
            <select>
                {nameWithA.map(el => el.map(el => <option>{el.title}</option>))}
            </select>

            <span style={{margin: '10px'}}>
                <button onClick={onClickHandlerC}>Counter</button>
            </span>
            {counter}
            <div style={{margin: '10px', display: 'flex', flexDirection: 'column', width: '130px'}}>
                <div>Citizens :</div>
                <input onChange={changeCitizensNumber}/>
                <div>Square :</div>
                <input onChange={changeSquareNumber}/>
                <div>FirstLetter :</div>
                <input onChange={changeFirstLetter}/>
            </div>


        </div>
    );
};
