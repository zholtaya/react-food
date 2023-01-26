import React from 'react'

const CategoryItem = ({text, icon}) => {
    return (
        <div className="filter_item">
            <img src={icon} alt={text} />
            <div className="name_filter_item">
                {text}
            </div>
        </div>
    )
}

export default CategoryItem