import React,{useState} from "react";

const Country = ({ key, labels,ingredients, calories, imgs }) => {
  const [show,setShow] = useState(false)

  const pon = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <div key={key} className = "card">
      <div>
        <h1>{labels}</h1>
        <h3>Calories = {calories}</h3>
        <img src={imgs} alt="" /><br />
        <button onClick = {pon}>Ingredient</button>
      </div>
      <div className = "ingredent" style = {show ? {} : {display:"none"}}>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
    </div>
  );
};
export default Country;
