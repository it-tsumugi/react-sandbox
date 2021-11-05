import moment from "moment";
import { VFC } from "react";
import styled from "styled-components";
import "moment/locale/ja";

import { FirebaseActionArea } from "../organisms/FireBase/FirebaseActionArea";
import { FirebaseChatDisplayArea } from "../organisms/FireBase/FirebaseChatDisplayArea";
import { FirebaseInfinite } from "../organisms/FireBase/FirebaseInfinite";

export const FireBasePage1: VFC = () => {
    moment.locale("ja");

    return (
        <SComponentContainer>
            <FirebaseActionArea />
            {/* <FirebaseChatDisplayArea /> */}
            <FirebaseInfinite />
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    text-align: center;
`;
