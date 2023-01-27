import React from 'react'

const CategoryItem = ({id, text, icon, isSelected, handleCategoryClick}) => {
    return (
        <div 
            className={`filter_item ${isSelected === true ? "selected" : ""}`}
            onClick={() => handleCategoryClick(id)}
        >
            <img src={icon} alt={text} />
            <div className="name_filter_item">
                {text}
            </div>
        </div>
    )
}

export default CategoryItem