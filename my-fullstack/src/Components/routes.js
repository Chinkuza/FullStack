import React from 'react';
import Home from './Home/';
import Products from './Products/';
import Contacts from './Contacts';

const routes = {

'/': () => <Home/>,
'/Products': () => <Products/>,
'/Contacts': () => <Contacts/>
}

export default routes;