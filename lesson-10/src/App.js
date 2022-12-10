import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import axios from "axios"

const API_products = "https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/products"

function App() {
  let [Input,setInput] = useState(0)
  let [Products, setProducts] = useState(0)

  const handleSearchInput =(e) => {
    if(timeOutId != null){
      clearTimeout(timeOutId);
    }


    timeOutId = setTimeout(() => {
    axios.get(`${API_products}`,{
      params:{
        name:e.target.value,
        createdMax:"",
        createdMin:""
      }
    }).then((res) => {
      setProducts([...res.data]);

    }).catch()
  },1000)
}
  console.log(Products)
  return (
    <div>
    <div className="App">
      <input type="text" name="search-product" placeholder="Search product..."onChange={handleSearchInput()}/>
    </div>
    <div>
    <ul>
      {Products.map(({name,id}, index) => {
        return <li><a href = {`/products/${id}`}>{name}</a></li>
      })}
    </ul>
    </div>
    </div>
  );
}

export default App;
