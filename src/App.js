import React, { Component } from 'react';
import styles from './App.module.css';
import { Charts, Cards, Country } from './Blocks'
import { fetchData } from './Api'


class App extends React.Component {
  state={
    data:{},
    country:''

  }
  async componentDidMount(){
    const fedata=await fetchData() //for an async function using await and storing in variable
    // console.log(fedata)            //calling the variable in console

    this.setState({data:fedata})
  }
  handleCountryChange=async(country)=>{
    const fedata=await fetchData(country)//country to show data
    console.log(country)
    console.log(fedata)
    this.setState({data:fedata,country:country})

    

  }
  render() 
  {
    const {data,country}=this.state
    return (
      <div className={styles.container}>
        <h1>Covid_19 Tracker</h1>
        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange} />

         <Charts data={data} country={country}/>


      </div>
    )
  }

}

export default App;
