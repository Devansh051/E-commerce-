import React, { useContext, useState, useEffect } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import drop_down from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const filtered = all_products.filter(item => item.category === props.category);
    setSortedProducts(filtered);
  }, [all_products, props.category]);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...sortedProducts].sort((a, b) => {
      if (order === 'lowToHigh') return a.new_price - b.new_price;
      if (order === 'highToLow') return b.new_price - a.new_price;
      return 0;
    });

    setSortedProducts(sorted);
  };

  return (
    <div className='shop-category'> 
      <img className='shopcategory-banner' src={props.banner} alt="banner" />

      <div className="shopcategory-indexSort">

        <p>
          <span>Showing 1–{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>

        <div className="shopcategory-sort">
          <label htmlFor="sort">Sort by: &nbsp;</label>
          <select id="sort" onChange={handleSortChange} value={sortOrder}>
            <option value="">Select</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;