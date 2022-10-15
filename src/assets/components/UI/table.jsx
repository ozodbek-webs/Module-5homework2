import React from 'react';

const Table = ({del, data: { id, isName, age }, num }) => {
    return (
        <>
            <tr>
                <td>{num}</td><td>{isName}</td><td>{`${new Date().getHours()} : ${new Date().getMinutes()} :  ${new Date().getSeconds()}`}</td><td>{age}</td>
            </tr >
        </>
    );
};

export default Table;