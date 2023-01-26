import React from 'react'

const MenuItem = ({name, image, weight, pfc, id}) => {
    return (
        <div className="catalog_menu_items">
            <div className="img__wrap">
                <img className="img__img" src={image} />
                <div className="img__description">
                    <div className="catalog_description">
                        <h3>{name}</h3>
                        <h4>{weight}</h4>
                        <h5>{pfc}</h5>
                    </div>
                    <a href="#" className="button_catalog">Добавить в корзину</a>
                </div>
            </div>
        </div>
    )
}

export default MenuItem