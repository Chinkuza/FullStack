import React from 'react';
import Homeslider from './Homeslider';
import Homehero from './Homehero';
import Homeproducts from './Homeproducts';

const Home = () => {

    return(
        <React.Fragment>
            <Homeslider/>
            <Homehero/>
            <Homeproducts/>
        </React.Fragment>
    )
}
export default Home;

