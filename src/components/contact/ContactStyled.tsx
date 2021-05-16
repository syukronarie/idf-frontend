import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import { Alert as AlertStyled } from "@material-ui/lab";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

export const ContactStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;

  ${media.mobileS} {
    .MuiContainer-root {
      padding-left: 15px;
      padding-right: 0px;
    }

    .MuiGrid-spacing-xs-3 > .MuiGrid-item {
      padding: 10px 20px;
    }

    h3,
    p,
    ul > li {
      padding-left: 15px;
    }
  }

  .contact-content {
    ${GLOBAL_FLEX.START};
    flex-direction: column;
    width: 100%;

    &_one {
      width: 100%;
      position: relative;

      ${media.mobileS} {
        height: 19.5rem;
      }

      ${media.tabletM} {
        height: 30rem;
      }

      ${media.desktop} {
        height: 31rem;
      }

      &_image {
        position: relative;
        z-index: -1;
        object-fit: cover;

        div:nth-child(1) {
          ${media.mobileS} {
            height: 29rem;
            top: 65px;
          }

          ${media.mobileM} {
            height: 39rem;
          }

          ${media.tabletM} {
            height: 30rem;
            top: 0;
          }

          ${media.desktop} {
            height: 76rem;
          }
        }
      }

      &_text {
        position: absolute;
        flex-direction: column;
        ${GLOBAL_FLEX.START};
        top: 0;
        color: ${COLORS.MYSTIC[100]};

        &_title {
          font-size: clamp(1.1rem, -0.875rem + 8.333333vw, 2.5rem);
        }

        &_description {
          margin-top: 1rem;
          font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.2rem);
        }

        ${media.mobileS} {
          margin-top: 6rem;
          line-height: 1.3rem;
          text-align: center;
          align-items: center;
          &_title,
          &_description {
            margin-left: 10px;
            margin-right: 10px;
          }
        }

        ${media.mobileM} {
          line-height: 1.8rem;
        }

        ${media.tabletM} {
          margin-top: 8rem;
          line-height: 1.5rem;

          &_title,
          &_description {
            margin-left: 50px;
            margin-right: 50px;
          }
        }

        ${media.tabletL} {
          margin-top: 8rem;
          align-items: flex-start;
          text-align: left;

          &_title,
          &_description {
            margin-left: 150px;
            margin-right: 150px;
          }
        }

        ${media.laptopL} {
          margin-top: 10rem;
        }
      }
    }

    &_two {
      ${media.mobileS} {
        margin-top: 14rem;
      }
      ${media.mobileM} {
        margin-top: 24rem;
      }

      ${media.tabletM} {
        margin-top: 0;
      }
    }

    &_two,
    &_three {
      ${GLOBAL_FLEX.CENTER};
      width: 100%;

      &_message {
        margin-top: 3%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        ${media.mobileS} {
          width: 96%;
        }

        ${media.tabletL} {
          width: 70%;
        }

        ${media.laptopM} {
          width: 70%;
        }

        &_content {
          ${GLOBAL_FLEX.CENTER}
          flex-direction: column;

          h3 {
            font-size: clamp(1.1rem, -0.875rem + 8.333333vw, 20px);
            font-weight: 600;
            margin-top: 3rem;
            margin-right: 0px;
            margin-bottom: 1rem;
            margin-left: 0px;
          }

          p {
            margin-top: 0.5%;
            margin-right: 8%;
            margin-bottom: 3%;
            margin-left: 8%;
            line-height: 20px;
            text-align: center;
          }
        }

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }
    }

    &_three {
      margin: auto;

      ${media.mobileS} {
        flex-direction: column;

        &_left,
        &_right {
          width: 96%;
          margin-top: 1rem;
          padding-top: 1rem;

          h3 {
            padding-bottom: 0.5rem;
          }
        }
      }

      ${media.tabletL} {
        flex-direction: row;
        width: 70%;

        &_left,
        &_right {
          width: 49;
          margin-top: 1rem;
          padding-top: 1rem;

          h3 {
            padding-bottom: 0.5rem;
          }
        }
      }

      &_left {
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }

      &_right {
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-top: 4%;
        margin-right: 0px;
        margin-bottom: 3%;
        margin-left: 0px;
      }

      p {
        margin-top: 0.5%;
        margin-right: 8%;
        margin-bottom: 9%;
        margin-left: 8%;
        line-height: 20px;
        text-align: center;
      }
    }
  }

  ${media.mobileS} {
    .MuiGrid-spacing-xs-3 {
      width: calc(100% + 13px);
    }
  }

  ${media.tabletM} {
    .MuiGrid-spacing-xs-3 > .MuiGrid-item {
      padding: 12px;
    }

    .MuiGrid-spacing-xs-3 {
      width: calc(100% + 24px);
    }

    .MuiContainer-root {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  ${media.tabletL} {
    .MuiContainer-root {
      padding-left: 10%;
      padding-right: 10%;
    }
  }
`;

export const Alert = styled(AlertStyled)`
  position: fixed;
  z-index: 3;
  top: 4%;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  pointer-events: all;
  animation: fadeOut 2.5s;

  /* .alert-out {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-name: fadeOut;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: running;
  } */

  @keyframes fadeOut {
    0% {
      opacity: 0;
      transform: translateY(-100%);
      transform-origin: 0 0;
    }
    10% {
      opacity: 1;
      transform: translateY(0);
      transform-origin: 0 0;
    }
  }
`;
