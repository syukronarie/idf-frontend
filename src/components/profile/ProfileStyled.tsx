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
        margin: 9rem;
        color: ${COLORS.MYSTIC[100]};

        &_title {
          ${GLOBAL_SIZING_FONTS.TEXT_4XL}
        }

        &_description {
          margin-top: 1rem;
          ${GLOBAL_SIZING_FONTS.TEXT_2XL}
        }
      }
    }

    &_two,
    &_three {
      ${GLOBAL_FLEX.CENTER};
      width: 100%;

      &_vision,
      &_goals {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 80%;
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

          h4 {
            font-size: 18px;
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
