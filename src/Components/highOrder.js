import React, {Component} from 'react';

const UpdatedClickComp = OriginalComp => {
    class Newcomp extends Component {
        render(){
            return <OriginalComp name="The user"/>; 
               }
    }
    return Newcomp;
};

export default UpdatedClickComp;