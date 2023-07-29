import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ClickCounter from './components/ClickCounter'
import Counter from './components/Counter'
import Section from './components/Section'
import Content from './components/Content'
import ThemeContext from './contexts/ThemeContext'

class App extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () =>{
    this.setState(({theme}) =>{
      if (theme === 'dark'){
        return {
          theme: "light"
        }
      } else {
        return {
          theme: 'dark'
        }
      }
    })
  }

  render(){
    const {theme} = this.state;
    return (
      <div className = "app">
        <Counter>
            {(count,incrementCount)=> (<ClickCounter count={count} incrementCount ={incrementCount}/>)}
        </Counter>
        <ThemeContext.Provider value = {{theme, switchTheme: this.switchTheme}}><Section/></ThemeContext.Provider>
        {/* <ThemeContext.Provider value = {{theme}}><Content/></ThemeContext.Provider> */}
      </div>
    )
  }
}

export default App