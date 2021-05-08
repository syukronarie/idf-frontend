import styled from "styled-components";

import { Alert as AlertStyled } from "@material-ui/lab";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

export const ContactStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;

  .contact-content {
    ${GLOBAL_FLEX.START};
    flex-direction: column;
    width: 100%;

    &_one {
      width: 100%;
      position: relative;

      &_image {
        position: relative;
        z-index: -1;
        object-fit: cover;
      }

      &_text {
        position: absolute;
        flex-direction: column;
        ${GLOBAL_FLEX.START};
        top: 0;
        margin: 8%;
        color: ${COLORS.MYSTIC[100]};

        &_title {
          ${GLOBAL_SIZING_FONTS.TEXT_3XL}
        }

        &_description {
          margin-top: 1rem;
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
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
        width: 50%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        &_content {
          ${GLOBAL_FLEX.CENTER}
          flex-direction: column;

          h3 {
            font-size: 20px;
            font-weight: 600;
            margin-top: 4%;
            margin-right: 0px;
            margin-bottom: 3%;
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
      width: 51%;
      margin: auto;
      justify-content: space-around;

      &_left {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 48%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }

      &_right {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 48%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
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
