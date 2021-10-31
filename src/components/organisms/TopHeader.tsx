import { VFC } from "react";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/data/pathData";

export const TopHeader: VFC = () => {
    return (
        <>
            <Link to={pathData.top}>Top</Link>
            <Link to={pathData.reduxPage1}>Redux</Link>
            <Link to={pathData.fireBasePage1}>FireBase</Link>
        </>
    );
};
