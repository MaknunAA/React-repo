import React from 'react';

const UpdatedClickComp = OriginalComp => {
    class Newcomp extends React.Component {
        render(){
            return <OriginalComp name="The user"/>; 
               }
    }
    return Newcomp;
}

export default UpdatedClickComp;