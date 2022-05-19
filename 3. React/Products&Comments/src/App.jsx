import React from 'react';
import './css/styles.scss';
import Product from './components/Product';
import {useData} from './hooks';
import Comments from './components/Comments';
import { useState, useEffect } from "react";
import axios from "axios";

 
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [products, loading, error] = useData("http://localhost/productdb/api.php/records/products");
  
  useEffect(() => {
    (async () => {
      if (selectedProduct) {
        // console.log("wordt uitgevoerd!!!!!!!!!!");
        const { data } = await axios(`http://localhost/productdb/api.php/records/products/${selectedProduct}?join=comments`)
        //console.log(data.comments);
        setComments(data.comments);
      }
    })()
  }, [selectedProduct]);
  
  return (
    <main className='container'>
      <h1 className='title'>Overzicht van alle producten met hun commentaren</h1>
      <div className="columns">
        <div className="column is-two-thirds">
          <h2 className='subtitle'>Overzicht producten</h2>
          {loading && (<progress  className="progress is-small is-primary" max="100" />)}
          {error && (
            <div className="notification is-danger">
              <button className='delete' onClick={() => {
                setError(false)
              }}></button>
              De producten konden niet opgehaald worden ...
            </div>)}
          {products.length > 0 && (
            <div className="grid">
              {products.map((product,i) => (
                <Product key={i} product={product} setSelectedProduct={setSelectedProduct} />
              ))}
            </div>
          )}
        </div>
        <div className="column is-one-third">
          <h2 className='subtitle'>Comments van gekozen product</h2>
           { selectedProduct && <Comments comments={comments} /> }
        </div>
      </div>
    </main>
  );     
};
 
export default App;   