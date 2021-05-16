import IconPlane from "src/assets/svg/IconPlane";
import media from "src/utils/constants/DeviceConstant";
import styled, { css } from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

type PropsNavbarStyle = {
  shadow: boolean;
};

export const NavStyled = styled.div<PropsNavbarStyle>`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.MYSTIC[100]};
  z-index: 3;

  /* ${media.mobileS} {
    background-color: green;
  }
  ${media.tabletM} {
    background-color: blue;
  }
  ${media.laptopL} {
    background-color: red;
  } */

  ${(props) =>
    props.shadow
      ? css`
          transition: 0.3s ease-in-out;
          box-shadow: #0000001a 1px 3px 10px 0px;
        `
      : ""}

  .dekstop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
    ${GLOBAL_SIZING_FONTS.TEXT_BASE};
    background-color: ${COLORS.FUN_BLUE};
    color: ${COLORS.FUN_BLUE[400]};

    ${media.mobileS} {
      justify-content: center;
      padding: 10px 0;
    }

    ${media.tabletL} {
      justify-content: space-between;
      padding: 20px 0;
      width: 95%;
    }

    ${media.laptopM} {
      width: 80%;
    }
  }

  .centerSide {
    ${media.mobileS} {
      display: none;
    }
    ${media.tabletM} {
      display: none;
    }

    ${media.tabletL} {
      display: flex;
    }

    ul {
      display: flex;
      flex-direction: row;
    }
    li {
      padding: 0 10px;
      cursor: pointer;
    }
  }

  .rightSide {
    ${media.mobileS} {
      display: none;
    }
    ${media.tabletM} {
      display: none;
    }

    ${media.tabletL} {
      display: flex;
    }

    .btn-register {
      ${GLOBAL_FLEX.CENTER};
      padding: 10px 30px 10px 20px;
      color: ${COLORS.MYSTIC[200]};
      background-color: ${COLORS.FUN_BLUE[500]};
      font-size: ${GLOBAL_SIZING_FONTS.TEXT_SM};
    }
  }
`;

export const Plane = styled(IconPlane)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
