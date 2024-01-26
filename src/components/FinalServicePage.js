
import React from 'react';
import { useSelector } from 'react-redux';
import FinalServiceList from './FinalServiceList';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f6cd7c;
    padding: 1rem;
    margin: 2rem 1rem 1rem 1rem;
    border-radius: 8px;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: .1s ease;
`;
const TotalPrice = styled.p`
    font-size: var(--fontsize__body);
    font-weight: var(--fontweight__body-bold);
`;
const ButtonContainer = styled.div`
    width: 100%;
`;
const PrintButton = styled.button`
    width: 100%;
    padding: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: all .1s ease;
    background-color: var(--color__danger);
    color: var(--fontcolor__white);
    font-size: var(--fontsize__body);
    font-weight: var(--fontweight__title);

    @media (hover:hover) and (pointer: fine){
        &:hover{
            background-color: var(--fontcolor__white);
            color: var(--color__danger);
        }
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: .5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color__danger);
`;
const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
const NoOperationMessage = styled.p`
    font-size: var(--fontsize__body);
    font-weight: var(--fontweight__body-bold);
    color: var(--fontcolor__black);
    text-align: center;
    opacity: .75;
`;

function FinalServicePage() {
    const { operations, totalPrice } = useSelector((state) => state.service);
    const hasOwnOperations = operations.length !== 0;

    return (
        <Wrapper>
            <Container>
                <TotalPrice>
                    Toplam: { totalPrice }
                </TotalPrice>
                <ButtonContainer>
                    <PrintButton>
                        Yazdır
                    </PrintButton>
                </ButtonContainer>
            </Container>
            
            {hasOwnOperations 
            ? <ListContainer>
                <FinalServiceList operations = { operations } />
            </ListContainer>
            : <NoOperationMessage> 
                Henüz operasyon eklemediniz.
            </NoOperationMessage>
            }
            
        </Wrapper>
    );
}

export default FinalServicePage;