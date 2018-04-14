import styled from "styled-components";

export const GridWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin: 0;
  padding: 0;
`;

export const GridMiniView = styled.View`
  flex: 1;
`;

export const GridText = styled.Text`
  font-size: 13px;
  padding-bottom: ${props => (props.primary ? "8px" : "0")};
  font-weight: ${props => (props.primary ? "bold" : "normal")};
  padding-left: 4px;
`;
