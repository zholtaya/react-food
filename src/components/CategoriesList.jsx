import React from 'react';
import { categoriesData } from '../constants/categoriesData';
import CategoryItem from './CategoryItem';

const CategoriesList = () => {
    return (
        <div className="filter_categories">
            {
                categoriesData.map((category) => (
                    <CategoryItem icon={category.icon} text={category.text} key={category.id}/>
                ))
            }
        </div>
    )
}

export default CategoriesList