import { render } from '@testing-library/react';
import { Component } from 'react';
import bag from './bag.jpg';



export class GroceryList extends Component {
  state = {
    userInput: "", 
    groceryList : []

  }

  onChangeEvent(e){
    this.setState({userInput: e})
    
  }

  addItem(input){
    if (input=== '') {
        alert ('Please enter an item')
    }
    else {
    let listArray =this.state.groceryList;
    listArray.push(input)
    this.setState({groceryList: listArray, userInput: ''})
  }
}

deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState ({groceryList: listArray})
}

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render(){
    return(
        <div>
        <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type="text"
            placeholder= "What do you want to buy?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="container">
            <button onClick={() =>  this.addItem(this.state.userInput)} className="btn add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index} alt="check-box" >
                    <img src={bag} width="40px" alt='check box' />
                    {item}</li>
            ))}
        </ul>
        <div className="container">
        <button onClick={() => this.deleteItem()} className="btn delete" >Delete</button>
        </div>
        </form>
        </div>
    )
  }
}