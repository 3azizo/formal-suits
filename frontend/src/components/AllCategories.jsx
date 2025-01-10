import React from 'react';
import suits from "../assets/categoriesIcon/suits.png";
import blazer from "../assets/categoriesIcon/blazer.png";
import kids from "../assets/categoriesIcon/kids.png";
import belt from "../assets/categoriesIcon/belt.png";
import shoes from "../assets/categoriesIcon/shoes.png";
// import shoppingBag from "../assets/categoriesIcon/shopping-bag.png";
// import cloths from "../assets/categoriesIcon/dress.png";
// import scarf from "../assets/categoriesIcon/scarf.png";
import trousers from "../assets/categoriesIcon/trousers.png";
// import makrup from "../assets/categoriesIcon/makeup.png";
// import diamond from "../assets/categoriesIcon/diamond.png";
// import hijab from "../assets/categoriesIcon/hijab.png";
import socks from "../assets/categoriesIcon/socks.png";

import { Link } from 'react-router-dom';

const AllCategories = () => {
  const categories = [
    { name: 'بدل رجالي', icon: suits, path: '/categories/بدل رجالي' },
    { name: 'بلازرات', icon: blazer, path: '/categories/بلازرات' },
    { name: 'بدل اطفالي', icon:kids, path: '/categories/بدل اطفالي' },
    { name: 'أحذية', icon: shoes, path: '/categories/أحذية' },
    { name: 'أحزمة', icon: belt, path: '/categories/أحزمة' },
    { name: 'بناطيل', icon: trousers, path: '/categories/بناطيل' },
    { name: 'شرابات', icon: socks, path: '/categories/شرابات' },
  ];

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">الفئات</h1>
      <div className="row">
        {categories.map((category) => (
          <div className="col-6 col-md-3 mb-4" key={category.path}>
            <Link to={category.path} className="card category-card text-decoration-none shadow-sm">
              <div className="card-body">
                <div className="icon-container mb-2">
                  <img src={category.icon} alt={`أيقونة لفئة ${category.name}`} />
                </div>
                <h5 className="card-title">{category.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
