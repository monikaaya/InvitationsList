import React, { useState } from 'react';
import './App.css';
import List from "./components/list";
import AddToList from "./components/AddToList";

 export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"LeBorn James",
      url:"D:\react-with-typescript\react_with_typescript\image\download.jpg",
      age:36,
      note:"Alegeric to staying on the same team"
    }
  ])


  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  
  );
}

export default App;
