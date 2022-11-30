import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Routes from '../routes/routes';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div>
                        {props.location.pathname !== '/login' && props.location.pathname !== '/register' ? (
                            <Header />
                        ) : null}
                        <div className="container">
                            <div className="main">
                                <Routes />
                            </div>
                        </div>
                        {props.location.pathname !== '/login' && props.location.pathname !== '/register' ? (
                            <Footer />
                        ) : null}
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
