import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ScrollToTop from './components/animation/ScrollToTop.jsx';
import Navbar from './components/navigation/Navbar.jsx'
import Footer from './components/navigation/Footer.jsx'
import HomePage from './components/pages/HomePage.jsx'
import Menu from './components/navigation/Menu.jsx'
import MovilPage from './components/pages/MovilPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ServicePage from './components/pages/ServicePage.jsx';
import ToolsPage from './components/pages/ToolsPage.jsx';
import WebPage from './components/pages/WebPage.jsx';
import MarketingPage from './components/pages/MarketingPage.jsx';

import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    const history = createHistory();
    return (
        <div>
          <ScrollToTop>
            <Menu />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/service' component={ServicePage} />
            <Route exact path='/tools' component={ToolsPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/movil' component={MovilPage} />
            <Route exact path='/web' component={WebPage} />
            <Route exact path='/marketing' component={MarketingPage} />
            <Footer />
          </ScrollToTop>  
        </div>  
    );
  }
}

export default App;