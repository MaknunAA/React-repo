import reactDom from "react-dom";
import React from 'react';

function formatName (user){
    return user.firstName +' '+ user.lastName; 
}

const user = {
    firstName: "Maknun",
    lastName: "Adekunle"
};
const element = (
    <h1>Hello, {formatName(user)} </h1>
)
 
reactDom.render(element, document.getElementById('root')
);

export default formatName;