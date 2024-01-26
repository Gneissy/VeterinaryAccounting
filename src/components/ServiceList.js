import React, { useState } from 'react';
import ServiceShow from './ServiceShow';
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem 1rem 1rem 0;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const InputContainer = styled.div`
    width: 100%;
`;
const StyledInput = styled.input`
    padding: .5rem;
    font-size: var(--fontsize__subtitle);
    border-radius: 8px;
    width: calc(100% - 1rem);
`;

function ServiceList({ services }) {

    const [operation, setOperation] = useState("");
    const handleOperationChange = (event) =>  setOperation(event.target.value);

    let renderedServices;
    if (operation !== "") {
        const regexPattern = new RegExp(operation, 'i');

        renderedServices = services
        .filter((service) => regexPattern.test(service.operation_name))
        .map((service, index)=> <ServiceShow service = { service } key = { index } />);
    } else{
        renderedServices = services.map((service) => <ServiceShow service = {service} key= {service.id} />)
    }

    return (
        <>
            <InputContainer>
                <StyledInput placeholder = "Operasyon Ara" value = {operation} onChange = {handleOperationChange} />
            </InputContainer>
            <Wrapper>
                { renderedServices.length !== 0 
                ? renderedServices 
                : `Böyle bir operasyon bulamadım.`
                }
            </Wrapper>
        </>
    );
}

export default ServiceList;