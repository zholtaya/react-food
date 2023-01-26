import React from 'react';
import main_image from "../assets/images/hero-image.png";
const MainSection = () => {
    return (
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
    )
}

export default MainSection