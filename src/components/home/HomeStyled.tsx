import IconPlane from "src/assets/svg/IconPlane";
import IconWhatsapp from "src/assets/svg/IconWhatsapp";
import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";
import GLOBAL_SIZINGS from "@styles/globalSizings";

export const HomeActivitiesContainer = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 1rem;

  .activities_heading {
    ${GLOBAL_FLEX.CENTER}
    flex-direction: column;
    width: 100%;
    background-color: ${COLORS.MYSTIC[100]};
    height: auto;

    &_title {
      ${GLOBAL_SIZING_FONTS.TEXT_2XL}
      color: ${COLORS.FUN_BLUE[500]};
      text-align: center;
      padding-top: ${GLOBAL_SIZINGS.xl5};
    }

    &_description {
      ${GLOBAL_SIZING_FONTS.TEXT_BASE}
      color: ${COLORS.FUN_BLUE[500]};
      text-align: center;
      padding-bottom: ${GLOBAL_SIZINGS.xl5};
    }
  }

  .activities_content {
    ${GLOBAL_FLEX.CENTER}
    flex-direction:column;
    width: 100%;

    &_image {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 95%;
      margin: auto;

      &_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};
        padding: 30px 0 0;
        margin: 0 25px;
        width: 90%;
      }

      img {
        transition: box-shadow 1.5s ease-out;
        object-fit: cover;
        :hover {
          box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
          transition: box-shadow 0.2s ease-in-out;
        }
      }
    }
  }
`;

export const HeaderStyled = styled.div`
  .heading {
    ${GLOBAL_FLEX.START};
    flex-direction: column;

    ${media.mobileS} {
      height: 11.5rem;
    }

    ${media.mobileM} {
      height: 14rem;
    }

    ${media.tabletM} {
      height: 28rem;
    }

    ${media.desktop} {
      height: 31rem;
    }

    &_image {
      position: relative;
      width: 100%;
      z-index: -1;
      top: 0;
      object-fit: cover;

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

    &_content {
      position: absolute;
      top: 0;
      width: 100%;
      margin: auto;

      &_wrapper {
        ${GLOBAL_FLEX.START};
        flex-flow: column;
        padding-left: 10%;
        padding-top: 1rem;
        color: ${COLORS.MYSTIC[200]};

        ${media.mobileS} {
          padding-left: 0;
          justify-content: center;
          align-items: center;
          padding-top: min(1rem, 26vw + 10%, 8rem);
        }

        ${media.tabletM} {
          padding-top: 5rem;
        }

        ${media.tabletL} {
          padding-left: 10%;
          padding-top: 8rem;
          justify-content: center;
          align-items: flex-start;
        }

        ${media.laptopM} {
          padding-left: 10%;
          justify-content: flex-start;
        }
      }
    }

    &_title {
      margin-top: 6rem;
      font-weight: 500;
      font-size: clamp(1rem, -0.875rem + 8.333333vw, 2.5rem);

      ${media.mobileS} {
        line-height: 1.3rem;
        text-align: center;
      }

      ${media.mobileM} {
        line-height: 1.8rem;
      }

      ${media.tabletM} {
        line-height: 3rem;
      }

      ${media.tabletL} {
        text-align: start;
      }
    }

    &_description {
      font-weight: 500;
      font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.8rem);

      ${media.mobileS} {
        line-height: 1.3rem;
        text-align: center;
      }

      ${media.mobileM} {
        line-height: 1.8rem;
      }

      ${media.tabletM} {
        line-height: 3rem;
      }

      ${media.tabletL} {
        text-align: start;
      }
    }
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;

    ._item {
      ${GLOBAL_FLEX.CENTER};

      ${media.mobileS} {
        padding-right: 10px;
        padding-left: 10px;
        margin: 1rem 0;
      }

      ${media.tabletM} {
        padding-right: 20px;
        padding-left: 0;
        margin: 2rem 0;
      }
    }
  }
`;

export const Whatsapp = styled(IconWhatsapp)`
  height: 1.5rem;
  width: 2rem;

  ${media.mobileS} {
    margin-right: 0;
  }

  ${media.tabletM} {
    margin-right: 0.5rem;
  }
`;

export const Plane = styled(IconPlane)`
  font-size: 1.5rem;

  ${media.mobileS} {
    margin-right: 0;
  }

  ${media.tabletM} {
    margin-right: 1rem;
  }
`;

export const TestimonyStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 6rem;

  .testimony_heading {
    background-image: url("/img/map.jpg");
    width: 100%;

    ${media.mobileS} {
      line-height: 1rem;
    }

    ${media.mobileM} {
      line-height: 1.7rem;
    }

    ${media.tabletM} {
      line-height: 1.5rem;
    }

    &_title {
      font-size: clamp(14px, -0.875rem + 8.333333vw, 20px);
      color: white;
      text-align: center;
      padding-top: ${GLOBAL_SIZINGS.xl3};
    }

    &_description {
      font-size: clamp(12px, -0.875rem + 8.333333vw, 18px);
      text-align: center;
      color: ${COLORS.FUN_BLUE[200]};
      padding-top: 10px;
      padding-bottom: 25px;
    }
  }

  .testimony_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: auto;
    padding: 1% 0;
    margin: auto;

    &_square {
      width: 20rem;
      margin: 30px 10px;
      height: auto;
      background-color: ${COLORS.MYSTIC[100]};
      border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};
      transition: box-shadow 0.25s ease-in-out;

      :hover {
        transition: box-shadow 0.25s ease-in-out;
        box-shadow: 0 -1px 3.6px rgba(0, 0, 0, 0.039),
          0 0.6px 10px rgba(0, 0, 0, 0.058), 0 6.8px 24.1px rgba(0, 0, 0, 0.073),
          0 38px 80px rgba(0, 0, 0, 0.11);
      }

      div:nth-child(1) {
        width: 100%;
      }

      &_divider {
        ${GLOBAL_FLEX.CENTER}
        padding: 10px;
        color: ${COLORS.MYSTIC[500]};
        background-color: ${COLORS.FUN_BLUE[500]};

        &_text {
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
      }

      &_text {
        padding: 10px 25px 25px 25px;

        &_name {
          ${GLOBAL_SIZING_FONTS.TEXT_XL}
        }

        &_message {
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
      }
    }

    ${media.mobileS} {
      flex-direction: column;

      &_square {
        width: 92%;
      }
    }

    ${media.tabletM} {
      min-height: 100%;
      align-items: normal;
      flex-wrap: wrap;
      flex-direction: row;

      &_square {
        display: flex;
        flex-basis: calc(50% - 40px);
        flex-direction: column;
      }
    }

    ${media.tabletL} {
      flex-wrap: inherit;
      flex-basis: none;
    }
  }
`;
