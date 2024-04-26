import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const [isInCart, setIsInCart] = useState(false)

  function handleClick(){
    setInCart(!inCart)
    setIsInCart(!isInCart)
  }


  return (
    <li className={isInCart ? "in-cart" : ""}  >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
