import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import Header from './Header.js';
import About from './About.js';
import Service from './Service.js';
import Forum from './Forum.js';
import Purchase from './Purchase.js';
import Footer from '../Footer/Footer.js'
import './Main.css';

class Main extends Component{
    render(){
        return(
            <div className="Init">
                <Menu/>
                <Header />
                <About />
                <Service />
                <Forum />
                <Purchase />
                <Footer />
            </div>
        );
    }
}

export default Main;