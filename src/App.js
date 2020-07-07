import React, { Component } from 'react';
import styles from './App.module.css';
import { Charts, Cards, Country } from './Blocks'
import { fetchData } from './Api'


class App extends React.Component {
  state={
    data:{}

  }
  async componentDidMount(){
    const fedata=await fetchData() //for an async function using await and storing in variable
    console.log(fedata)            //calling the variable in console

    this.setState({data:fedata})
  }
  render() 
  {
    const {data}=this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Charts />
        <Country />


      </div>
    )
  }

}

export default App;
