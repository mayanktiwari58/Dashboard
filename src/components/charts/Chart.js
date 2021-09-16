import "../../../node_modules/react-vis/dist/style.css"
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from "react-vis"


const Chart =()=>{

    const data =[
        {x: 0, y: 10 },
        {x: 1, y: 32},
        {x: 2, y: 28 },
        {x: 3, y: 30 },
        {x: 4, y: 28 },
        {x: 5, y: 30 },
        {x: 6, y: 32 },
        {x: 7, y: 40},
        {x: 8, y: 30 },
        {x: 9, y: 35 },
    ]
    return(
        <div style={{marginTop:'15px'}}>
          <XYPlot height={400} width={800}>
          <VerticalGridLines/>
          <HorizontalGridLines/>
          <XAxis/>
          <YAxis/>
          <LineSeries data={data} color="red"/>
          <LineSeries data={data} color="yellow"/>
          <LineSeries data={data} color="purple"/>
          </XYPlot>
        </div>

    )

};

export default Chart;