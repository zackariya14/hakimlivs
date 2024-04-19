



import React from 'react';

const ProductCategories = ({
  categories = [], 
  selectedCategory,
  setSelectedCategory
 }) => {

  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  console.log("Categories PC", categories)

  return (
    <div>
      <div className="categories">
        {categories.map(category => (
          <button type="button" onClick={() => showCategory(category)} key={category._id}>
            {category.name}
          </button>

        ))}

      </div>
      <div id="products-container">
        {selectedCategory && (
          <div>
            <h2>Produkter inom kategorin {selectedCategory.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;



// ProductCategories.jsx
// import React, { useState } from 'react';

// const ProductCategories = ({ products }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const showCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <div className="categories">
//         <button type="button" onClick={() => showCategory('mejeri')}>Mejeri</button>
//         <button type="button" onClick={() => showCategory('bröd, kex & kakor')}>Bröd, kex & kakor</button>
//         <button type="button" onClick={() => showCategory('frukt & grönt PER STYCK')}>Frukt & Grönt</button>
//         <button type="button" onClick={() => showCategory('DRYCK')}>Dryck</button>
//       </div>
//       <div id="products-container">
//         {selectedCategory && products && products[selectedCategory] && (
//           <div>
//             <h2>Produkter inom kategorin {selectedCategory}</h2>
//             <ul>
//               {Object.entries(products[selectedCategory]).map(([productName, price]) => (
//                 <li key={productName}>
//                   <div>
//                     <strong>{productName}</strong>: ${price}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;
