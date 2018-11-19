import React, {Component} from 'react';

import Employerlist from './Employerlist';


class Table extends Component{


    render(){   


        return(
            <table>
                <Employerlist clickhandler={this.props.clickhandler}/>
            </table>
        )
    }
}

export default Table;