import React from "react";
import styled from "styled-components";

import { Plane } from "@home/HomeHeader";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";
import GLOBAL_SIZINGS from "@styles/globalSizings";

import Button from "../commons/Button";

const FooterContainer = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 6rem;

  .footer_heading {
    background-image: url('/img/map.jpg');
    width: 100%;

    &_title {
      ${GLOBAL_SIZING_FONTS.TEXT_2XL}
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
        ${GLOBAL_SIZING_FONTS.TEXT_2XL}
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

const FooterDekstop: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <FooterContainer>
      <div className='footer_heading'>
        <h1 className='footer_heading_title'>
          Apakah kamu siap dengan memulai petualangan belajarmu bersama kami?
        </h1>
      </div>

      <div className='footer_content'>
        <div className='footer_content_text'>
          <p>
            World-renowned aviation professionals create the Inflight
            Institute’s programs. <br /> We work with airlines from around the
            world to provide world-class aviation training.
          </p>
          <p>
            No matter where you are on the planet, you can have access to Cabin
            Crew training!
          </p>
        </div>
        <Button width='13rem' height='4rem'>
          <Plane />
          Daftar Sekarang
        </Button>
        <div className='footer_content_copyright'>
          <p>© Indonesia Dirgantara Flight {year}</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterDekstop;
