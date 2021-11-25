import { VFC } from "react";
import { Link } from "react-router-dom";
import { pathData } from "../../assets/data/pathData";
import styled from "styled-components";

export const TopHeader: VFC = () => {
  return (
    <SComponentContaier>
      <Link to={pathData.reduxPage1}>Redux</Link>
      <Link to={pathData.reduxThunkPage1}>ReduxThunk</Link>
      <Link to={pathData.fireBasePage1}>FireBase</Link>
    </SComponentContaier>
  );
};

const SComponentContaier = styled.div`
  display: flex;
  gap: 20px;
`;
