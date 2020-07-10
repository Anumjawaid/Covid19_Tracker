import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './countrypick.module.css'
import {fetchCountries} from '../../Api'

// Ex6 function
const Country = ({handleCountryChange}) => {
    const [fetchCountry,setFetchCountry]=useState([])
    useEffect(()=>{
        const getcountry=async()=>{
            setFetchCountry(await fetchCountries())
        }
        getcountry()
    },[setFetchCountry])
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchCountry.map((country,i)=><option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

}
export default Country;