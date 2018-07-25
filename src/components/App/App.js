import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      starList: [
        {
          name: 'Nunki',
          diameter: 132
        },{
          name: 'Menkar',
          diameter: 109
        },{
          name: 'Polaris',
          diameter: 90
        }
      ],

      newStar: {
        name: '',
        diameter: ''
      }
    }
  }

  handleChangeFor = (propertyName)=>{
    return (event)=>{
      this.setState({
        newStar:{
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      })
    }
  }

  addNewStar = ()=>{
    this.setState({
      starList:[
        ...this.state.starList,
        this.state.newStar
      ]
    })
  }

  emptyInputs = ()=>{
    this.setState({
      newStar:{
        name: '',
        diameter: ''
      }
    })
  }

  handleClick = (event)=>{
    event.preventDefault();
    console.log(this.state.newStar);
    this.addNewStar();
    this.emptyInputs();
  }

  render() {

    // let starListItemArray = [];
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    // for (let star of this.state.starList) {
    //   starListItemArray.push(<li>{star}</li>)
    // }

    let starListItemArray = this.state.starList.map( (star, index)=>{
      return <li key={index} >{star.name}: {star.diameter} million kilometers in diameter</li>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleClick}>
          <input value={this.state.newStar.name} type="text"  placeholder="name" onChange={this.handleChangeFor('name')}/>
          <input value={this.state.newStar.diameter} type="number" placeholder="diameter" onChange={this.handleChangeFor('diameter')}/>
          <input type="submit" value="submit"/>
        </form>  
        <ul>
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
