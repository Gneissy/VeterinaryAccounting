
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteOperation } from '../store';
import { TrashIcon } from './IconStore';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #e8dcc3;
    border-radius: 8px;
    padding: 1rem;
    gap: .25rem;

    padding-bottom: 32px;
    position: relative;
`;
const OperationName = styled.p`
    color: var(--fontcolor__black);
    font-size: var(--fontsize__body);
`;
const Price = styled.p`
    color: var(--fontcolor__black);
    font-size: var(--fontsize__body);
    font-weight: var(--fontweight__body-bold);
`;
const StyledTrashIcon = styled(TrashIcon)`
    width: 24px;
    height: 24px;
    fill: var(--color__danger);
    transition: all .1s ease;
    cursor: pointer;
    position: absolute;
    bottom: 12px;
    right: 12px;
    user-select: none;

    @media (hover:hover) and (pointer: fine){
        &:hover{
            fill: red;
        }
    }
`;

function FinalServiceShow({ operation, index }) {
    const dispatch = useDispatch();

    const handleDeleteOperation = function(){
        const objectDeleted = {
            price: operation.price,
            index: index
        }

        dispatch(deleteOperation(objectDeleted));
    }

    return (
        <Wrapper>
            <OperationName>
                {operation.operation_name}
            </OperationName>
            <Price>
                {operation.price} TL
            </Price>

            <StyledTrashIcon onClick = { handleDeleteOperation }/>
        </Wrapper>
    );
}

export default FinalServiceShow;