import React from 'react'
import { menuData} from '../constants/menuData';
import MenuItem from './MenuItem';
const MenuList = () => {
    return (
        <div className="catalog_menu_item_all">
            {
                menuData.map((item) => (
                    <MenuItem 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default MenuList