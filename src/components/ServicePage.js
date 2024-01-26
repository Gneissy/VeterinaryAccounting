import React from 'react';
import ServiceList from './ServiceList';
import useServices from '../utils/useServices';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 2rem;
    margin-left: 4rem;

    @media (max-width : 768px){
        margin-left: 1rem;
    };

`;

function ServicePage() {

    const services = useServices();

    return (
        <Wrapper>
            <ServiceList services = {services} />
        </Wrapper>
    );
}

export default ServicePage;