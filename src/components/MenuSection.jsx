import React from 'react';

import CategoriesList from './CategoriesList';
import MenuList from './MenuList';


const MenuSection = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="title_section">
                    <h2 className="text_title">
                        Наше Меню
                    </h2>
                    <div className="border_title"></div>
                </div>
                
                <CategoriesList/>
                <MenuList />

                <button className="button_showmore_catalog">
                    Показать ещё
                </button>
            </div>
        </section>
    )
}

export default MenuSection