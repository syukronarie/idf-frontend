import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

export const ProfileStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;

  .profile_content {
    ${GLOBAL_FLEX.START};
    flex-direction: column;
    width: 100%;
    margin-bottom: 8%;

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
            height: 14rem;
            top: 65px;
          }

          ${media.mobileM} {
            height: 14rem;
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
          margin-left: 10px;
          margin-right: 10px;
          font-size: clamp(1.1rem, -0.875rem + 8.333333vw, 2.5rem);
        }

        &_description {
          margin-top: 1rem;
          margin-left: 10px;
          margin-right: 10px;
          font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.2rem);
        }

        ${media.mobileS} {
          margin-top: 7.5rem;
          line-height: 1.3rem;
          text-align: center;
          align-items: center;
        }

        ${media.mobileM} {
          line-height: 1.8rem;
        }

        ${media.tabletM} {
          margin-top: 12rem;
          line-height: 3rem;
        }

        ${media.tabletL} {
          margin-top: 12rem;
          align-items: flex-start;
          text-align: left;

          &_title,
          &_description {
            margin-left: 150px;
            margin-right: 150px;
          }
        }
      }
    }

    &_two,
    &_three {
      ${GLOBAL_FLEX.CENTER};
      width: 100%;
      background-color: #dddddd;

      &_vision,
      &_goals {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        ${media.mobileS} {
          width: 95%;
        }

        ${media.tabletM} {
          width: 80%;
        }

        &_content {
          ${GLOBAL_FLEX.CENTER}
          flex-direction: column;
          padding-bottom: 7%;

          h3 {
            font-size: clamp(14px, -0.875rem + 8.333333vw, 20px);
            font-weight: 600;
            margin-top: 10%;
            margin-right: 0px;
            margin-bottom: 3%;
            margin-left: 0px;
          }

          h4 {
            font-size: clamp(12px, -0.875rem + 8.333333vw, 18px);
            font-weight: 600;
            margin: 1rem;
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

      &_goals {
        &_content {
          ${GLOBAL_FLEX.START}
          padding-bottom: 7%;

          h3 {
            align-self: center;
          }

          p {
            text-align: start;
          }
        }
      }
    }
  }
`;
