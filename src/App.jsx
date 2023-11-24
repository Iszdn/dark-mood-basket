import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const [darkMood, setDarkMood] = useState(false)

  async function getProducts() {
    const data = await fetch("https://northwind.vercel.app/api/products");
   const res= await data.json()
    setProducts(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);
function handleBasket(x) {
  setBasket([...basket,x])
}
  return (
    <div className={darkMood ? "dark" : ""} >
      <h3>umumi hisse</h3>
      <button onClick={()=>setDarkMood(!darkMood)}>basket ac</button>
      <div style={{border: "1px solid var(--main-text-color)"}}><h3>basketim</h3>
      {
        basket.map(x=>
          <ul>
        <li>{x.id}</li>
        <li>{x.name}</li>
      </ul>
          )
      }
      </div>
     {isLoading ? <p>is loading ...</p> : <>
     {products.map(x=>
      <ul>
        <li>{x.id}</li>
        <li>{x.name}</li>
        <button onClick={()=>handleBasket(x)}>add basket</button>
      </ul>
      )}
     </>}
    </div>
  );
}

export default App;
