import "./App.css";
import ServicePage from "../src/components/ServicePage";
import FinalServicePage from "./components/FinalServicePage";
import styled from "styled-components";

const TempWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 240px;
    min-height: 100svh;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`; 

function App() {

    return (
        <TempWrapper>
            <ServicePage />
            <FinalServicePage />
        </TempWrapper>
    );
}

export default App;
