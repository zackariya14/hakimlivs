import "./products.css";
import React, { useState, useEffect } from "react";
import testData from './testdata.json';


const Products = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(testData);
    }, []);

    return (
        <div>
            {data && (
                <div >
                    {data.map((category, index) => (
                        <div key={index}>
                            <h2>{Object.keys(category)[0]}</h2>
                            
                            <ul className='product-container' >
                                {Object.entries(category[Object.keys(category)[0]]).map(([product, price], i) => (
                                    <li className="product-card" key={i}>
                                        {product}: {price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products;
