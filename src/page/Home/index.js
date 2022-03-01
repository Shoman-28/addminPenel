
// import Header from 'components/VerticalLayout/Header';
import Header from 'components/HorizontalLayout/Header';

import React from 'react';

import EcommerceProducts from 'pages/Ecommerce/EcommerceProducts/index';
const index = () => {
    return (
        <div className="page-content">
            <Header/>

            <EcommerceProducts/>
            {/* <h1>home</h1> */}
            
        </div>
    );
};

export default index;