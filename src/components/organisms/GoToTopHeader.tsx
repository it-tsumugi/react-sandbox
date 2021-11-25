import { VFC } from "react";
import { Link } from "react-router-dom";

import { pathData } from "../../assets/data/pathData";

export const GoToTopHeader: VFC = () => {
  return <Link to={pathData.top}>Top</Link>;
};
