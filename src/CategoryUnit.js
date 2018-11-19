import React from 'react';
import Funcarea from './Funcarea';
import Subcategory from './Subcategory';
import './main.css';

const CategoryUnit = (props) => {
    return(
        <div  className="funcarea" onClick={()=> props.clickhandler()}>
                <Funcarea />
                
        </div>
    );

        
    
}

export default CategoryUnit;