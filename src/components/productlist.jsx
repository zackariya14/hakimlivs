import React from 'react';
import axios from 'axios';
import './products.css';

function ProductList( { products = []} ) { const [products, setProducts] = useState([]);

  useEffect(() => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
  
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    useEffect(() => {
      fetchProducts();
      fetchCategories();
    }, []);
  
    useEffect(() => {
      console.log("Products", products)
      console.log("selectedCategory", selectedCategory)
      if(selectedCategory) {
        setFilteredProducts(products.filter(product => {
          const hasCategory = product.category.includes(selectedCategory._id)
          console.log("product has category", product.name, hasCategory)
          return hasCategory
        }))
      }
    },[selectedCategory])
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    console.log("categories", categories)
  
    const storeProducts = filteredProducts.length > 0 ? filteredProducts : products
  return (
    <div>
      <ul className='product-container'>
        {products.map(product => (
          <li className='product-card' key={product._id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.Image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;



