import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

type PropsStyled = {
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  border?: string;
  backgroundColorOne?: string;
  backgroundColorTwo?: string;
};

export const BtnStyled = styled.div<PropsStyled>`
  button {
    ${GLOBAL_FLEX.CENTER};
    padding: 10px 30px 10px 20px;
    color: ${COLORS.MYSTIC[200]};
    background-color: ${(props) =>
      props.backgroundColorOne
        ? props.backgroundColorOne
        : COLORS.FUN_BLUE[500]};
    color: ${(props) => (props.color ? props.color : COLORS.MYSTIC[500])};
    font-size: ${GLOBAL_SIZING_FONTS.TEXT_SM};
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border: ${(props) => (props.border ? props.border : "0")};
    ${(props) =>
      props.fontSize ? props.fontSize : GLOBAL_SIZING_FONTS.TEXT_BASE};
    transition: 0.3s ease-in-out;

    :hover {
      transition: 0.3s ease-in-out;
      background-color: ${(props) =>
        props.backgroundColorTwo
          ? props.backgroundColorTwo
          : COLORS.FUN_BLUE[600]};
    }
  }
`;
