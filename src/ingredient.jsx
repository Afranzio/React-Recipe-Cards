import React from "react"

const Pops = (ingredients) => {
  return(
    <div className = "ingredent">
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      {console.log({ingredients})}
    </div>
  );
}

export default Pops;