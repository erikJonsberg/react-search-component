import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
//import logo from './logo.svg';
import { getData } from './utils/data.utils'
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("")
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

useEffect(()=>{
  const fetchUsers = async () => {
    const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
    setMonsters(users)
  }

  fetchUsers();
}, []);  

useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);

}, [monsters, searchField]);


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const searchFieldString = event.target.value.toLowerCase();
      setTitle(searchFieldString);
    };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onSearchChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="title-search-box"
      />
      <br />
      <SearchBox
        onSearchChangeHandler={onTitleChange}
        placeholder="set title"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
