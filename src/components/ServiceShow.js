import React from 'react';
import styled from "styled-components";
import { addOperation } from "../store/index";
import { useDispatch } from "react-redux";
import { CatIcon, DogIcon } from "./IconStore";

const TempWrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #e8dcc3;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;

    @media (max-width : 768px){
        flex-direction: column;
    };
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width : 768px){
        width: 100%;
        justify-content: center;
        align-items: center;
    };
`;
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .2rem;
`;
const StyledCatIcon = styled(CatIcon)`
    fill: #2F4858;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: fill .1s linear;
    user-select: none;

    &:hover{
        fill: #8AA391;
    }
`;
const StyledDogIcon = styled(DogIcon)`
    fill: #2F4858;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: fill .1s linear;
    user-select: none;

    &:hover{
        fill: #8AA391;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const MainCategory = styled.p`
    font-size: var(--fontsize__small);
`;
const OperationCategory = styled.p`
    font-size: var(--fontsize__body);
    padding-left: 1rem;
`;
const OperationName = styled.p`
    font-size: var(--fontsize__subtitle);
    font-weight: var(--fontweight__body-bold);
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
`;
const OperationNote = styled.span`
    font-style: italic;
    font-size: var(--fontsize__small);
    font-weight: var(--fontweight__body);
    opacity: .75;
`;
const Price = styled.p`
    font-size: var(--fontsize__small);
    font-weight: var(--fontweight__body-bold);
`;


function ServiceShow({ service }) {
    const dispatch = useDispatch();


    const handleAddOperation = function( price ){
        let updateService = {...service, price: price};
        dispatch(addOperation(updateService));
    }



    const serviceHasCatPrice = service.costs.hasOwnProperty("cat");
    const serviceHasDogPrice = service.costs.hasOwnProperty("dog");
    const serviceHasVolatilePrice = service.costs.hasOwnProperty("volatile");
    // TODO add more required fields if needed

    const serviceHasOperationNote = service.operation_note !== "";

    return (
        <TempWrapper>
            <InfoContainer>
                <MainCategory> { service.main_category } </MainCategory>
                <OperationCategory> { service.operation_category } </OperationCategory>
                <OperationName> 
                    { service.operation_name } 
                    {serviceHasOperationNote &&
                        <OperationNote> 
                            ({ service.operation_note })  
                        </OperationNote>
                    }
                </OperationName>
            </InfoContainer>

            <IconsContainer>
                {serviceHasCatPrice &&
                    <IconContainer>
                        <StyledCatIcon onClick = { () => handleAddOperation(service.costs.cat) } />
                        <Price> {service.costs.cat} </Price>
                    </IconContainer>
                }

                {serviceHasDogPrice &&
                    <IconContainer>
                        <StyledDogIcon onClick = { () => handleAddOperation(service.costs.dog) } />
                        <Price> {service.costs.dog} </Price>
                    </IconContainer>
                }

                {serviceHasVolatilePrice &&
                    <IconContainer>
                        <StyledCatIcon onClick = { () => handleAddOperation(service.costs.volatile) } />
                        <Price> {service.costs.volatile} </Price>
                    </IconContainer>
                }
            </IconsContainer>
        </TempWrapper>
    );
}

export default ServiceShow;