import { VFC } from "react";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/data/pathData";

export const ReduxHeader: VFC = () => {
  return (
    <>
      <Link to={pathData.top}>Top</Link>
      <Link to={pathData.reduxPage1}>Page1</Link>
      <Link to={pathData.reduxPage2}>Page2</Link>
    </>
  );
};
