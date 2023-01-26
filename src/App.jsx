import { useState } from 'react';

import logotype from "./assets/images/nav-logo.png";
import cart from "./assets/images/cart-icon.svg";
import main_image from "./assets/images/hero-image.png";

import salad from "./assets/images/icons_menu/salad.svg";
import drinks from "./assets/images/icons_menu/drinks.svg";
import burgers from "./assets/images/icons_menu/burgers.svg";
import fries from "./assets/images/icons_menu/fries.svg";
import pizza from "./assets/images/icons_menu/pizza.svg";
import discount from "./assets/images/icons_menu/discount.svg";

import image_1 from "./assets/images/catalog_menu/item__image_1.png";
import image_2 from "./assets/images/catalog_menu/item__image_2.png";
import image_3 from "./assets/images/catalog_menu/item__image_3.png";
import image_4 from "./assets/images/catalog_menu/item__image_4.png";


function App() {
  return (
    <div>
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
      <section className="main">
        <div className="container">
          <div className="main_inner">
            <div className="headline_main">
              <div className="suptitle_main">
                Экспресс-доставка от Яндекс.Еды
              </div>
              <h1 className="title_main">
                Быстро
                и вкусно
                <span>.</span>
              </h1>
              <div className="subtitle_main">
                Сеть быстрого питания #1 в Казани
              </div>
              <div className="button_main_items">
                <button className="main_button">
                  Сделать заказ
                </button>
                <div className="delivery_text">
                  бесплатная доставка <br /> от 500 рублей
                </div>
              </div>
            </div>
            <img className='main_image' src={main_image} alt="main_image" />
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <div className="title_section">
            <h2 className="text_title">
              Наше Меню
            </h2>
            <div className="border_title"></div>
          </div>
          <div className="filter_categories">
            <div className="filter_item">
              <img src={salad} alt="salad" />
              <div className="name_filter_item selected-filter">
                Салаты
              </div>
            </div>
            <div className="filter_item">
              <img src={drinks} alt="drinks" />
              <div className="name_filter_item">
                Напитки
              </div>
            </div>
            <div className="filter_item">
              <img src={burgers} alt="burgers" />
              <div className="name_filter_item">
                Бургеры
              </div>
            </div>
            <div className="filter_item">
              <img src={fries} alt="fries" />
              <div className="name_filter_item">
                Закуски
              </div>
            </div>
            <div className="filter_item">
              <img src={pizza} alt="pizza" />
              <div className="name_filter_item">
                Пицца
              </div>
            </div>
            <div className="filter_item">
              <img src={discount} alt="discount" />
              <div className="name_filter_item">
                Акции
              </div>
            </div>
          </div>
          <div className="catalog_menu_item_all">
            <div className="catalog_menu_items">
              <div className="img__wrap">
                <img className="img__img" src={image_1} />
                <div className="img__description">
                  <div className="catalog_description">
                    <h3>Салат “Греческий”</h3>
                    <h4>300 грамм - 1 порция</h4>
                    <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                  </div>
                  <a href="#" className="button_catalog">Добавить в корзину</a>
                </div>
              </div>
            </div>
            <div className="catalog_menu_items">
              <div className="img__wrap">
                <img className="img__img" src={image_2} />
                <div className="img__description">
                  <div className="catalog_description">
                    <h3>Салат “Тропический”</h3>
                    <h4>300 грамм - 1 порция</h4>
                    <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                  </div>
                  <a href="#" className="button_catalog">Добавить в корзину</a>
                </div>
              </div>
            </div>
            <div className="catalog_menu_items">
            <div className="img__wrap">
              <img className="img__img" src={image_3} />
              <div className="img__description">
                <div className="catalog_description">
                  <h3>Салат “Японка”</h3>
                  <h4>300 грамм - 1 порция</h4>
                  <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                </div>
                <a href="#" className="button_catalog">Добавить в корзину</a>
              </div>
            </div>
          </div>
          <div className="catalog_menu_items">
            <div className="img__wrap">
              <img className="img__img" src={image_4} />
              <div className="img__description">
                <div className="catalog_description">
                  <h3>Салат “Греческий”</h3>
                  <h4>300 грамм - 1 порция</h4>
                  <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                </div>
                <a href="#" className="button_catalog">Добавить в корзину</a>
              </div>
            </div>
          </div>
          <div className="catalog_menu_items">
              <div className="img__wrap">
                <img className="img__img" src={image_1} />
                <div className="img__description">
                  <div className="catalog_description">
                    <h3>Салат “Собери Сам”</h3>
                    <h4>300 грамм - 1 порция</h4>
                    <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                  </div>
                  <a href="#" className="button_catalog">Добавить в корзину</a>
                </div>
              </div>
            </div>
            <div className="catalog_menu_items">
              <div className="img__wrap">
                <img className="img__img" src={image_2} />
                <div className="img__description">
                  <div className="catalog_description">
                    <h3>Салат “Цезарь”</h3>
                    <h4>300 грамм - 1 порция</h4>
                    <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                  </div>
                  <a href="#" className="button_catalog">Добавить в корзину</a>
                </div>
              </div>
            </div>
            <div className="catalog_menu_items">
            <div className="img__wrap">
              <img className="img__img" src={image_3} />
              <div className="img__description">
                <div className="catalog_description">
                  <h3>Салат “Оливье”</h3>
                  <h4>300 грамм - 1 порция</h4>
                  <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                </div>
                <a href="#" className="button_catalog">Добавить в корзину</a>
              </div>
            </div>
          </div>
          <div className="catalog_menu_items">
            <div className="img__wrap">
              <img className="img__img" src={image_4} />
              <div className="img__description">
                <div className="catalog_description">
                  <h3>Салат “Летний”</h3>
                  <h4>300 грамм - 1 порция</h4>
                  <h5>36 - белков, 11 - жиров, 55 - углеводов</h5>
                </div>
                <a href="#" className="button_catalog">Добавить в корзину</a>
              </div>
            </div>
          </div>
          </div>
          <button className="button_showmore_catalog">
            Показать ещё
          </button>
        </div>
      </section>
    </div>

  )
}

export default App
