import React, { useContext, useState } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [showFilters, setShowFilters] = useState(false);

  // Filter products by category and price range
  const filteredProducts = all_products.filter((item) => {
    return item.category === props.category && 
           item.new_price >= priceRange.min && 
           item.new_price <= priceRange.max;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low-high':
        return a.new_price - b.new_price;
      case 'price-high-low':
        return b.new_price - a.new_price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className='shop-category'> 
      <img className='shopcategory-banner' src={props.banner} alt="banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>

        <div className="shopcategory-controls">
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </button>

          <div className="shopcategory-sort">
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            <img src={drop_down} alt='arrow' />
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                placeholder="Min"
              />
              <span>to</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      )}

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

      {sortedProducts.length === 0 && (
        <div className="no-products">
          No products found matching your criteria
        </div>
      )}

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
