import IconPlane from "src/assets/svg/IconPlane";
import IconWhatsapp from "src/assets/svg/IconWhatsapp";
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
    height: 30rem;

    &_image {
      position: relative;
      width: 100%;
      z-index: -1;
      top: 6rem;
      object-fit: cover;
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
        padding-top: 13%;
        color: ${COLORS.MYSTIC[200]};
      }
    }

    &_title {
      margin-top: 6rem;
      font-weight: 500;
      ${GLOBAL_SIZING_FONTS.TEXT_5XL};
    }

    &_description {
      font-weight: 500;
      ${GLOBAL_SIZING_FONTS.TEXT_4XL}
    }
  }

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    margin: 2rem 0;

    ._item {
      padding-right: 20px;
      ${GLOBAL_FLEX.CENTER};
    }
  }
`;

export const Whatsapp = styled(IconWhatsapp)`
  height: 1.5rem;
  width: 2rem;
  margin-right: 0.5rem;
`;

export const Plane = styled(IconPlane)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
