import React from "react";
import CategoryItem from '../category-items/category-item';

const CategoryList = ({categories}) => {
    return (
        <div className='categories-container'>
      {categories.map((category) => {
        return (
          <CategoryItem
          title={category.title}
          key={category.id}
          backgroundImage = {category.backgroundImage}
          />
        )
      })}
    </div>
    )
}

export default CategoryList