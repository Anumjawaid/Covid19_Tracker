import axios from 'axios' //library for fetching data

const url="https://covid19.mathdro.id/api" //api to fetch the data

//An es6 async function

export const fetchData  = async() =>{ //exporting the function by using export
    try{
        const response=await axios.get(url) //getting the response from the URl
        return response;

    }
    catch(error){}
    

}
