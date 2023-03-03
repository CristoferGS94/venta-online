import React from "react";
import "./category-item.css"

const CategoryItem = ({title, backgroundImage}) => {
    return (
        <div className='category-container'>
        <div className="background-image"style={{backgroundImage: `url(${backgroundImage})`}}></div>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default CategoryItem