import { VFC } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ja";

import { FirebaseActionArea } from "../organisms/FireBase/FirebaseActionArea";
import { FirebaseChatDisplayArea } from "../organisms/FireBase/FirebaseChatDisplayArea";

export const FireBasePage1: VFC = () => {
  moment.locale("ja");

  return (
    <SComponentContainer>
      <FirebaseActionArea />
      <FirebaseChatDisplayArea />
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  text-align: center;
`;
