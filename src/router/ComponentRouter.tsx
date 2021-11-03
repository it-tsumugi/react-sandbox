import { VFC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ReduxHeader } from "../components/organisms/ReduxHeader";
import { ReduxPage1 } from "../components/pages/ReduxPage1";
import { ReduxPage2 } from "../components/pages/ReduxPage2";
import { Top } from "../components/pages/Top";
import { FireBasePage1 } from "../components/pages/FireBasePage1";
import { TopHeader } from "../components/organisms/TopHeader";
import { FireBaseHeader } from "../components/organisms/FireBase/FireBaseHeader";

import { pathData } from "../assets/data/pathData";

export const ComponentRouter: VFC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={pathData.top}>
                    <TopHeader />
                    <Top />
                </Route>
                <Route path={pathData.fireBasePage1}>
                    <FireBaseHeader />
                    <FireBasePage1 />
                </Route>
                <Route path={pathData.reduxPage1}>
                    <ReduxHeader />
                    <ReduxPage1 />
                </Route>
                <Route path={pathData.reduxPage2}>
                    <ReduxHeader />
                    <ReduxPage2 />
                </Route>
                <Route path="*">
                    <Redirect to={{ pathname: pathData.top }} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
