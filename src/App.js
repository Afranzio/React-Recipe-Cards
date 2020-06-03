import React, { useState, useEffect } from "react";
import Country from "./CountryCard";
import "./styles.css";

const App = () => {
  const [recipes, setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("banana")

  useEffect(() => {
    getCountry();
  }, [query]);

  const APP_ID = '66789c34';
  const APP_KEY = "47eee77a99a1e0ca974de14158ba7ece"

  const getCountry = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    setRecipe(data.hits);

  };

  const updateSearch = (e) => {
    setSearch(e.target.value)
    e.target.value = ""
    e.preventDefault();
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit = {getSearch}>
        <input className="Search-Bar" type="text" value = {search} onChange={updateSearch} />
        <button className="Search-Button" type="submit">
          SEARCH
        </button>
      </form>
      <div className= "cards">
        {recipes.map(recipe => (
          <Country
            key = {recipe.recipe.totalWeight}
            labels={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients = {recipe.recipe.ingredients}
            imgs = {recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App; 