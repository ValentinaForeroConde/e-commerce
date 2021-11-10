import React from 'react'
import menu from '../assets/icon_menu.svg';
import logo from '../assets/logo_yard_sale.svg';
import cart from '../assets/icon_shopping_cart.svg'

const Navbar = () => {
    return (
        <nav>
        <img src="menu" class="menu" alt="menu" />

        <div class="navbar-left">
            <img src="logo" alt="logo" class="logo-navbar" />
            
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div class="navbar-right">
            <ul>
                <l class="navbar-email">valentina@gmail.com</l>
                <li class="navbar-shopping-cart">
                    <img src="cart" alt="shopping cart" />
                    <div>2</div>
                </li>
            </ul>
            
        </div>
    </nav>
    )
}

export default Navbar
