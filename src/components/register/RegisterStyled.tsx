import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";

export const RegisterStyled = styled.div`
  padding-top: 8%;

  .form-wrapper {
    ${GLOBAL_FLEX.START}
    flex-direction: column;

    &__form {
      width: 100%;
      background-color: ${COLORS.MYSTIC[100]};
      margin: 2% 0%;

      .register-title {
        text-align: center;
        font-size: 35px;
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
`;
