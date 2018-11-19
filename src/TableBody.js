import React from 'react';


const TableBody = props => {

    const rows = props.employer_list.map((row,index) => {
        return (
            <tr key = {index}>
                <td>{row.fund_code}</td>
                <td>{row.employer_code}</td>
                <td><button onClick = {() => props.removeEmployer(index)}>Remove</button></td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
}

export default TableBody;