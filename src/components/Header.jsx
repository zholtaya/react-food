import React from 'react'
import logotype from "../assets/images/nav-logo.png";
import cart from "../assets/images/cart-icon.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="header_logo">
                        <img src={logotype} alt="Logotype" />
                    </div>
                    <nav className="nav">
                        <a href="#" className="nav-link">Главная</a>
                        <a href="#" className="nav-link">Меню</a>
                        <a href="#" className="nav-link">Сервис</a>
                        <a href="#" className="nav-link">О нас</a>
                    </nav>
                    <div className="cart">
                        <div className="cart_counter">12</div>
                        <img className="img_cart" src={cart} alt="cart" />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header