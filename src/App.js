
import React, { Component } from 'react';
import styles from './App.module.css';
import { Charts, Cards, Country } from './Blocks'
import Footer from './Blocks/copywright/copywright'
import { fetchData } from './Api'
import Corona from './UI/cor.png'
import Glob from './UI/glob.png' 

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
        <h1>C<img src={Corona} className={styles.image}/>vid 19 Tracker</h1>
        <div className='imghead'><img className={styles.globe}src={Glob}/><h2>Global Cases</h2></div>

        
        <Cards data={data}/>
        <h3>Country Selector</h3>
        <Country handleCountryChange={this.handleCountryChange} />
        <h3>Data</h3>

         <Charts data={data} country={country}/>
         <br/>
        <br/>
        <br/>
        <br/>
         <Footer />


      </div>
    )
  }

}

export default App;