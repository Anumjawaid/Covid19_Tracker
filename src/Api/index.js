import axios from 'axios' //library for fetching data

const url="https://covid19.mathdro.id/api" //api to fetch the data

//An es6 async function

export const fetchData  = async(country) =>{ //exporting the function by using export
    let changeableurl= url;

    if(country){
        changeableurl=`${url}/countries/${country}`
    }
    try{
        //{ const response=await axios.get(url) }//getting the response from the URl it rerurns everything from the api
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(changeableurl)
    //    ModifiedData={
    //         confirmed,
    //         deaths,
    //         recovered,
    //         lastUpdate
        // };//this can be returned
        return{confirmed,deaths,recovered,lastUpdate}//only returns the mentioned data
        

    }
    catch(error){}
    

}
// Another function for daily data
export const fetchdaily = async () =>{
    try{
           const {data}=await axios.get(`${url}/daily`)
           //{console.log(data)}// not on console pass on charts
           const modifiedData = data.map((dailyData) => ({
               confirmed:dailyData.confirmed.total,
               deaths:dailyData.deaths.total,
               date:dailyData.reportDate,
           }))    
        return modifiedData;

        }
    catch(error){}
}
// func to fetch Countries
export const fetchCountries =async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`)
        return countries.map((country)=>country.name)
    } catch (error) {
        console.log(error);
        
        
    }
}