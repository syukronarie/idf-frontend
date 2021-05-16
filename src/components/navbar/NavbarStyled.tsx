import IconPlane from "src/assets/svg/IconPlane";
import media from "src/utils/constants/DeviceConstant";
import styled, { css, keyframes } from "styled-components";

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
  z-index: 5;

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

  .burger {
    ${media.mobileS} {
      display: flex;
      left: 3px;
      z-index: 4;
    }

    ${media.mobileM} {
      left: 15px;
    }

    ${media.mobileL} {
      left: 25px;
    }

    ${media.tabletL} {
      display: none;
    }
  }

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
    font-size: 1.15rem;

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

const fadeIn = keyframes`
  from {
    display: flex;
  }

  to {
    display: none;
  }
`;

export const SideBarStyled = styled.div`
  ${media.tabletL} {
    display: none;
  }

  .sideBarActive {
    transition: all 0.25s ease-in;
    top: 0;
    justify-content: center;
    width: 100%;
    height: 50vh;
    padding-bottom: 20%;
    background-color: #fffffff7;
    border-bottom: solid 3px #1e69b7;
    box-shadow: 0px 0px 0px #000;
    z-index: 4;
  }

  .sideBarDeactive {
    top: -25rem;
    animation: ${fadeIn} 0.5s ease;
  }

  ul {
    display: flex;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 6rem;
    transition: all 0.25s ease-in;

    a {
      width: 100%;
    }

    li {
      font-size: 16px;
      line-height: 2.5rem;
      color: ${COLORS.FUN_BLUE[400]};

      ${media.mobileS} {
        padding-left: 2rem;
      }

      ${media.mobileM} {
        padding-left: 15px;
      }

      ${media.mobileL} {
        padding-left: 25px;
      }
    }
  }
`;

export const Plane = styled(IconPlane)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
