import React from 'react';

function funcComp(){
    function formatName (user){
        return user.firstName +' '+ user.lastName; 
    }
    
    const user = {
        firstName: "Maknun",
        lastName: "Adekunle"
    };

    function tick(){
        const time = React.createElement(
            'h3',
            {className: 'infodisplay'},
            'The time is {new Date().toLocalTimeString()}'
        )
    }
    
    return (
        <div>
            <p>This is the functional component</p>
        <h1>Hello, {formatName(user)} </h1>
        {setInterval(tick, 1000)};
        </div>
        
    );
}

export default funcComp;