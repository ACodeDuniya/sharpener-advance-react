import React, { useState, useEffect } from "react";

const Sellerspage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: ''
  });

  useEffect(() => {
    // Load products from local storage on component mount
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
        // Destructure the event target's name and value
        const { name, value } = event.target;
    
        // Update the newProduct state with the changed input value
        setNewProduct((prevProduct) => {
        // Create a copy of the previous product state
        const updatedProduct = { ...prevProduct };
    
        // Update the specific field in the copied product state
        updatedProduct[name] = value;
    
        // Return the updated product state
        return updatedProduct;
        });
  };
    

  const handleAddProduct = () => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setNewProduct({ id: '', name: '', price: '' });

    // Save updated products to local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);

    // Save updated products to local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Function to calculate the total price of all products
  const calculateTotalPrice = () => {
    // Initialize a variable to hold the total price
    let total = 0;
  
    // Loop through each product using forEach
    products.forEach((product) => {
      // Check if the price is a valid number before adding to the total
      if (!isNaN(product.price)) {
        // Add the price to the total
        total += Number(product.price);
      }
    });
  
    // Return the calculated total
    return total;
  };
  

  return (
    <div>
      <h1>Seller Admin Page</h1>
      <div>
        <h2>Add Product</h2>
        <form>
          <label>
            Product ID:{' '}
            <input
              type="number"
              name="id"
              value={newProduct.id}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Product Name:{' '}
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required />
          </label>
          <br />
          <label>
            Selling Price:{' '}
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.id}-{product.name}-{product.price}
              <button onClick={() => handleDeleteProduct(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <h2>Total Price: Rs. {calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default Sellerspage;
