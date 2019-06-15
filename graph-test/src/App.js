import React, { useState } from 'react';
import { ResponsiveLine } from 'nivo'
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, XAxis, YAxis, HorizontalGridLines } from 'react-vis';

const App = () => {
  const modifyTheData = () => {
    const newData = data.slice();

    const newMaxX = maxX + 1;
    const yPoint = Math.floor(Math.random() * 15);

    newData.push({ x: newMaxX, y: yPoint});
    setData(newData);
    setMaxX(newMaxX);
  }

  const [maxX, setMaxX] = useState(9);

  const [data, setData] = useState(
    [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ]);

  const getNivoData = () => {
    const newData = [
      {
        id: "The First Line",
        data: data
      },
      {
        id: "The Second Line",
        data: data.map(point => {return {x: point.x, y: point.y - 3}})
      }
    ];
    console.log(newData);
    return newData;
  }

  return (
    <main>
      <XYPlot height={300} width={300}>
        <LineSeries data={data} />
      </XYPlot>

      <button onClick={modifyTheData}>
        Modify the data
      </button>

      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>

      <div style={{height: "300px"}}>
        <ResponsiveLine
          data={getNivoData()}
          />
      </div>
    </main>

  );
}

export default App;
