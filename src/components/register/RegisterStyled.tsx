import media from "src/utils/constants/DeviceConstant";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";

export const RegisterStyled = styled.div`
  padding-top: 4rem;

  .form-wrapper {
    ${GLOBAL_FLEX.START}
    flex-direction: column;

    &__form {
      width: 100%;
      background-color: ${COLORS.MYSTIC[100]};
      margin: 3rem 0%;

      .register-title {
        text-align: center;
        font-weight: 500;
        font-size: clamp(1.6rem, -0.875rem + 8.333333vw, 2rem);
        padding-top: 10%;
        color: ${COLORS.FUN_BLUE[500]};
      }

      p,
      li {
        line-height: 25px;
      }

      b {
        font-weight: 650;
      }
    }
  }

  .upload-foto {
    display: none;
  }

  ${media.mobileS} {
    .MuiContainer-root {
      padding-left: 15px;
      padding-right: 0px;
    }

    .MuiGrid-spacing-xs-3 > .MuiGrid-item {
      padding: 10px 20px;
    }

    p,
    ul > li {
      padding-left: 15px;
    }
  }

  ${media.tabletM} {
    .MuiGrid-spacing-xs-3 > .MuiGrid-item {
      padding: 12px;
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
