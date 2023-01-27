import React, { useState } from 'react';

import CategoriesList from './CategoriesList';
import MenuList from './MenuList';
import { categoriesData } from '../constants/categoriesData';


const MenuSection = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);

    const handleCategoryClick = (id) => {
        setSelectedCategoryId(id);
    }

    return (
        <section className="menu">
            <div className="container">
                <div className="title_section">
                    <h2 className="text_title">
                        Наше Меню
                    </h2>
                    <div className="border_title"></div>
                </div>
                
                <CategoriesList handleCategoryClick={handleCategoryClick} selectedCategoryId={selectedCategoryId} categoriesData={categoriesData}/>
                <MenuList />

                <button className="button_showmore_catalog">
                    Показать ещё
                </button>
            </div>
        </section>
    )
}

export default MenuSection