import React, {  Fragment, useState, useEffect } from 'react'
import { RacingBarChart } from '../../components';
import { allData } from '../../helpers/mocks'
import { useInterval, customData } from "../../helpers/functions";
import { covidController } from '../../services/covidController'

const getRandomIndex = array => {
    return Math.floor(array.length * Math.random());
  };
  
export const  Home = () => {
    const [iteration, setIteration] = useState(0);
    const [start, setStart] = useState(false);
    const [data, setData] = useState(allData)

    useEffect(() => {
        covidController().getHistory(2).then(async res => {
          const newData = customData(res.data)
          setData(newData)
        })
        
    },[])

    useInterval(() => {
        if (start) {
            const randomIndex = getRandomIndex(data);
            setData(
              data.map((entry, index) =>
                index !== randomIndex
                  ? {
                      ...entry,
                      value: entry.value + 10
                    }
                  : entry
              )
            );
            setIteration(iteration + 1);
          }
      }, 1000);

        return (
            <Fragment>
              <h1>Covid Global Cases by SGN</h1>
                <p>Date: {iteration}</p>
                <button onClick={() => setStart(!start)} style={{ marginBottom: '2em' }}>
                    {start ? "Stop the race" : "Start the race!"}
                </button>
                <RacingBarChart data={data} />
            </Fragment>
        )
    
}
