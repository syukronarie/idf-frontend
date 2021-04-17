import Image from "next/image";
import React from "react";
import styled from "styled-components";

import NavbarDekstop from "@navbar/NavbarDekstop";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

const ProfileStyled = styled.div`
  display: flex;
  ${GLOBAL_FLEX.CENTER}

  .profile_content {
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

    &_two {
      ${GLOBAL_FLEX.CENTER};
      width: 100%;

      &_vision {
        margin: 5rem 0;
        width: 80%;
        height: 20rem;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }
    }
  }
`;

const ProfilePage: React.FC = () => {
  return (
    <>
      <NavbarDekstop />
      <ProfileStyled>
        <div className='profile_content'>
          <div className='profile_content_one'>
            <div className='profile_content_one_image'>
              <Image
                src='/img/background/bkg-sky.jpg'
                layout='responsive'
                width={'1200'}
                height={'371'}
                objectFit='cover'
                sizes='100vw'
              />
            </div>
            <div className='profile_content_one_text'>
              <h3 className='profile_content_one_text_title'>
                Indonesia Dirgantara Flight
              </h3>
              <p className='profile_content_one_text_description'>
                IDF adalah Lembaga Pendidikan Staff Airlines dan Kepramugarian
                yang merupakan wujud peran serta tanggung jawab dalam usaha
                mencerdaskan kehidupan bangsa.
              </p>
            </div>
          </div>

          <div className='profile_content_two'>
            <div className='profile_content_two_vision'>
              <h3>Visi & Misi</h3>
            </div>
          </div>
        </div>
      </ProfileStyled>
    </>
  );
};

export default ProfilePage;
