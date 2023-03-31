import React from 'react';

const NameContainer = (props) => {
 
const{Title}=props.show;
    return (
        <div>
           <ul>
            <li>{Title}</li>
           </ul>
        </div>
    );
};

export default NameContainer;