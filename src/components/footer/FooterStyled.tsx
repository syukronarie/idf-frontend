import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZINGS from "@styles/globalSizings";

export const FooterContainer = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 6rem;

  ${media.mobileS} {
    line-height: 1rem;
  }

  ${media.mobileM} {
    line-height: 1.7rem;
  }

  ${media.tabletM} {
    line-height: 1.5rem;
  }

  .footer_heading {
    background-image: url("/img/map.jpg");
    width: 100%;

    &_title {
      font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.5rem);
      color: white;
      text-align: center;
      padding: ${GLOBAL_SIZINGS.xl7};
    }
  }

  .footer_content {
    ${GLOBAL_FLEX.CENTER}
    flex-direction: column;
    width: 100%;
    background-color: ${COLORS.MYSTIC[100]};
    color: ${COLORS.FUN_BLUE[500]};
    padding: 2rem 0;

    &_text {
      ${GLOBAL_FLEX.CENTER}
      flex-direction: column;
      height: 100%;
      padding: 2rem;

      p {
        text-align: center;
        padding: 10px;
        font-size: clamp(1rem, -0.875rem + 8.333333vw, 1.5rem);
      }
    }

    &_copyright {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.MYSTIC[100]};
      padding-top: 6rem;
      padding-bottom: 2rem;
    }
  }
`;
