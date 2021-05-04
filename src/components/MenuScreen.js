import React, { useState } from 'react'
import "../styles/MenuScreen.css"
import data from '../data'
import Header from './Header'
import Links from './Links'


function MenuScreen() {
    const [active, setActive] = useState(0);
    const [activeTab, setActiveTab] = useState(10);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
          setActive(index);
        }
    }
    const tabClick = e =>{
        const tabindex = parseInt(e.target.id, 10);
        if(tabindex !== activeTab){
            setActiveTab(tabindex);
        }
    }

    return (
        <div className="menu">
            <div className="layerx">
                <Header menu></Header>
                <section>
                    <aside className="left-side">
                        <h1>Menu</h1>
                        <ul>
                            <li>
                                <a href="#" onClick={handleClick} active={active === 0} id={0} className={active === 0 ?"selected-2" : ""}>Apetizers</a>
                            </li>
                            <li>
                                <a href="#" onClick={handleClick} active={active === 0} id={1} className={active === 1 ?"selected-2" : ""}>Main Dishes</a>
                            </li>
                            <li>Soups</li>
                            <li>Salads</li>
                            <li>Desserts</li>
                            <li>Platters</li>
                            <li>Sides</li>
                            <li>Wines & Drinks</li>
                        </ul>
                    </aside>
                    <article className="right-side">
                        <ul className="cusine-tab">
                            <li><a href="#" onClick={tabClick} activeTab={activeTab === 10} id={10} className={activeTab ===10 ?"selected" : ""}>African</a></li>
                            <li><a href="#" onClick={tabClick} activeTab={activeTab === 10} id={11} className={activeTab ===11 ?"selected" : ""}>Continental</a></li>
                        </ul>

                        { activeTab === 10 ? 
                            <div className="cuisine-div">
                                { active === 0 ? 
                                    data.apetizers.map(apetizer => (
                                        <div className="menu-items">
                                            <img className="menu-img" src={apetizer.image}alt="" />
                                            <div className="menu-title-div">
                                                <h4>{apetizer.title}</h4>
                                                <p>{apetizer.desc}</p>
                                            </div>
                                            <p className="price">${apetizer.price}</p>
                                        </div>
                                    ))
                                : null}
                                { active === 1 ?
                                    data.main.map(main => (
                                        <div className="menu-items">
                                            <img className="menu-img" src={main.image}alt="" />
                                            <div className="menu-title-div">
                                                <h4>{main.title}</h4>
                                                <p>{main.desc}</p>
                                            </div>
                                            <p className="price">${main.price}</p>
                                        </div>
                                    ))
                                : null}
                            </div>  
                        : null}

                        { activeTab === 11 ? 
                            <div className="cuisine-div">
                                {active === 0 ? 
                                    data.main.map(apetizer => (
                                        <div className="menu-items">
                                            <img className="menu-img" src={apetizer.image}alt="" />
                                            <div className="menu-title-div">
                                                <h4>{apetizer.title}</h4>
                                                <p>{apetizer.desc}</p>
                                            </div>
                                            <p className="price">${apetizer.price}</p>
                                        </div>
                                    ))
                                : null}
                                { active === 1 ?
                                    data.apetizers.map(main => (
                                        <div className="menu-items">
                                            <img className="menu-img" src={main.image}alt="" />
                                            <div className="menu-title-div">
                                                <h4>{main.title}</h4>
                                                <p>{main.desc}</p>
                                            </div>
                                            <p className="price">${main.price}</p>
                                        </div>
                                    ))
                                : null}
                            </div>
                        : null}
                    </article>
                </section>
                <Links lower/>
            </div>
        </div>
    )
}

export default MenuScreen;
