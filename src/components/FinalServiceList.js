
import React from 'react';
import FinalServiceShow from './FinalServiceShow';


function FinalServiceList({ operations }) {
    const renderedOperations = operations.map((operation, index) => 
        <FinalServiceShow 
            operation = { operation } 
            index = { index }
            key = { index } 
        />
    );

    return (
        <>
            { renderedOperations }
        </>
    );
}

export default FinalServiceList;