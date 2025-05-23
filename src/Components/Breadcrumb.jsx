import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index === items.length - 1 ? (
              <span className="current">{item.label}</span>
            ) : (
              <>
                <Link to={item.path}>{item.label}</Link>
                <span className="separator">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 