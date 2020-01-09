import React , { Component} from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'



class App extends Component {
  constructor(){
    super()
    this.state = {
      guesses : [null , null],
      hiddenChars : this.newMatchKey(),   
      // hidden chars = [{pairValue : Number, display : Boolean,  }...]
      howManyPairs : 8 ,
    }
  }
  handleClick(e){
    console.log(e)
  }

  newMatchKey(){
    let pairs = []
    for(let i = 1; i <= 8; i++){
      pairs.push(i)
      pairs.push(i)
    }
    pairs.sort( () => Math.random() - Math.random())
    pairs = pairs.map(num => {
      return {pairValue:num , display: false} 
    })
    return pairs
  }
  
  render(){
    return (
      <div>
        <h1>Greetings</h1>
  
        <GameBoard 
          hiddenChars = {this.state.hiddenChars}
          handleClick = {this.handleClick}
        />
      </div>
    )
  }
}



export default App;
