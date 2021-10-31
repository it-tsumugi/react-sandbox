import { VFC } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { ComponentRouter } from "./router/ComponentRouter";
import { store } from "./store/store";

export const App: VFC = () => {
    return (
        <SComponentContainer>
            <Provider store={store}>
                <ComponentRouter />
            </Provider>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    background-color: skyblue;
    min-height: 100vh;
`;
