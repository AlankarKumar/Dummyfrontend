import React, {Component} from 'react';
import './main.css';

class Employerlist extends Component{
    
        
    render(){

        const employer_list = [
            'RACV','NEC','BHP','AMCOR','JPMORG'
        ]
        const rows = employer_list.map((employer,index) => {
            return (
                <tr key={index}>
                    <td onClick={(event)=>this.props.clickhandler(event)}>{employer}</td>
                </tr>
            );
        })
        
        return(
            <tbody>{rows}</tbody>
        );
    }
}

export default Employerlist;