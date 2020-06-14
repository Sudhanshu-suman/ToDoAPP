import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        key:'',
        text:''
      }
     }
     this.addItem=this.addItem.bind(this);
     this.handleInput=this.handleInput.bind(this);
     this.deleteItem=this.deleteItem.bind(this);
     this.textEditor=this.textEditor.bind(this);
    } 
    addItem(e){
      e.preventDefault();
      const newItem=this.state.currentItem;
      if(newItem.text!==""){
        const newItems=[...this.state.items,newItem];
        this.setState({items:newItems,
          currentItem:{
            key:'',
            text:''}
          })
      }
    }
            
     textEditor(value,key){
       console.log("sudhu",value,key);
       const itemable=this.state.items;
       itemable.map(item=>{
        if( item.key===key){
          item.text=value;
        }
       })
       this.setState({items:itemable})
     }
  
    handleInput(e){
      this.setState({
        currentItem:{text:e.target.value,
          key:Date.now()}
                     
      })
    } 
    deleteItem(key){
      const filteredItems=this.state.items.filter(item=> 
        item.key!==key);
      this.setState({items:filteredItems}) 
     }
   
    
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form"  onSubmit={this.addItem}>
            <input type="text" placeholder="enter the text"
             value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit" >add</button>
           </form>
          
           <ListItems textEditor={this.textEditor} items={this.state.items} deleteItem={this.deleteItem}/>
        </header>
       
      </div>
    );
  }
}

export default App;
