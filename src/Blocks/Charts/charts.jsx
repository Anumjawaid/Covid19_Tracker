import React,{useState,useEffect} from 'react'
import {fetchdaily} from '../../Api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './charts.module.css'

// Ex6 function
const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData,setdailyData]=useState([])

    useEffect(() => {
        const fetchApi = async () => {
        setdailyData(await fetchdaily());
        }
        // console.log(dailyData)

        fetchApi();

    },[])

    const lineChart = (
        dailyData.length !=0//if array is 0 otherwise the folowing
        ?
        (
            <Line
            data={{
                labels:dailyData.map(({ date}) => date),
                datasets:[{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label :'infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths}) => deaths),
                    label :'deaths',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    borderColor:'#3333ff',
                    fill:true,

                }],
            }}            
            />
        ):null
    );
    const barChart =(
        confirmed
        ?(
            <Bar 
            data={{
                labels: ['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)'
                ],
                data:[confirmed.value,recovered.value,deaths.value] 

                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true ,text:`Current state in ${country}`}
            }}

            />
        ):null
    );
    return(
        <div className={styles.container}>
            {/* {lineChart}
            <h1> </h1>
            
            {barChart} */}
            {country ? barChart:lineChart}
        </div>
    )

}
export default Charts;