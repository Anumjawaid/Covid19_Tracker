import React, { Component } from 'react';
import styles from './App.module.css';
import { Charts, Cards, Country } from './Blocks'
import { fetchData } from './Api'


class App extends React.Component {
  async componentDidMount(){
    const data=await fetchData() //for an async function using await and storing in variable
    console.log(data)            //calling the variable in console
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Charts />
        <Country />


      </div>
    )
  }

}

export default App;
