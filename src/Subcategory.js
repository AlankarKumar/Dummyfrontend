import React from 'react';

const Subcategory =(props)=> {
    return(
        <div className="subcategory" onClick={()=>props.clickhandler()}>
            <p>Death Cover</p>
            <p>TPD Cover</p>
            <p>Death & TPD Cover</p>
        </div>
    );
}

export default Subcategory;