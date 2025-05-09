import React, { useContext, useState } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);

  const [maxPrice, setMaxPrice] = useState(5000);
  const [brand, setBrand] = useState('');
  const [minRating, setMinRating] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = all_products.filter((item) => {
    return (
      item.category === props.category &&
      item.new_price <= maxPrice &&
      (brand === '' || item.brand?.toLowerCase().includes(brand.toLowerCase())) &&
      (minRating === '' || item.rating >= parseFloat(minRating))
    );
  });

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />

   

      {/* Index and Sort */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> product(s)
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt='arrow' />
        </div>
      </div>

      <div className='shopcategory-content'>
        <aside className='shopcategory-sidebar'>
          {/* Filters can be placed here as well */}
          {showFilters && (
            <div className="shopcategory-filters">
              <div className="filter-group">
                <label>
                  Max Price: ₹{maxPrice}
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </label>
              </div>

              <div className="filter-group">
                <label>
                  Brand:
                  <input
                    type="text"
                    placeholder="Search by brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </label>
              </div>

              <div className="filter-group">
                <label>
                  Minimum Rating:
                  <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
                    <option value="">Any</option>
                    <option value="4.5">4.5 & up</option>
                    <option value="4">4 & up</option>
                    <option value="3">3 & up</option>
                    <option value="2">2 & up</option>
                  </select>
                </label>
              </div>
            </div>
          )}
        </aside>

        {/* Product Listing */}
        <div className="shopcategory-products">
          {filteredProducts.map((item, i) => (
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
    </div>
  );
}

export default ShopCategory;
