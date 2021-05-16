import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

export const Wrapper = styled.div`
  ${media.mobileS} {
    line-height: 1.8rem;
    padding-top: 6rem;
  }

  ${media.mobileM} {
    line-height: 2rem;
  }

  ${media.tabletM} {
    line-height: 2.5rem;
  }

  ${media.tabletL} {
    padding-top: 10rem;
  }

  .heading-title {
    font-size: clamp(1.6rem, -0.875rem + 8.333333vw, 2.5rem);
    text-align: center;
    color: ${COLORS.FUN_BLUE[500]};
    font-weight: 500;
    padding: 2% 0%;
  }

  ${media.tabletL} {
    .heading-title {
      padding: 2% 10%;
    }
  }

  .masonry {
    columns: 2;
    column-gap: 10px;
    padding: 15px;
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      columns: 3;
    }
    @media screen and (min-width: 1024px) {
      columns: 4;
    }
  }
  .masonryItem {
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-bottom: 10px;
    border-radius: 20px;
    width: 100%;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
    transition: filter 0.25s ease-in-out;
    &:hover {
      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.7));
      > img {
        filter: brightness(90%);
      }
      > span,
      a,
      svg {
        display: flex;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  .masonryImage {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    transition: 0.3s ease-in-out;
    /* cursor: zoom-in; */
    @media screen and (max-width: 768px) {
      border-radius: 10px;
    }
  }
`;
