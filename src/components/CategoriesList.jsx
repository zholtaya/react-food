import React from 'react';
import CategoryItem from './CategoryItem';

const CategoriesList = ({ categoriesData, selectedCategoryId, handleCategoryClick }) => {
    return (
        <div className="filter_categories">
            {
                categoriesData.map((category) => (
                    <CategoryItem handleCategoryClick={handleCategoryClick} isSelected={category.id === selectedCategoryId} key={category.id} {...category}/>
                ))
            }
        </div>
    )
}

export default CategoriesList