import Link from "next/link";
import React from "react";
import COLORS from "src/assets/styles/globalColors";
import GLOBAL_FLEX from "src/assets/styles/globalFlex";
import GLOBAL_SIZING_FONTS from "src/assets/styles/globalSizingFonts";
import IconPlane from "src/assets/svg/IconPlane";
import styled from "styled-components";

/**
 * TODO: CREATING NAVBAR DEKSTOP
 * Including:
 * [ ] Logo Icon
 * [*] Menus
 * [ ] Search
 */

const menus = [
  {
    link: '/',
    name: 'Beranda'
  },
  {
    link: '/profile',
    name: 'Profile'
  },
  {
    link: '/register',
    name: 'Pendaftaran Online'
  },
  {
    link: '/testimony',
    name: 'Testimoni'
  },
  {
    link: '/contact',
    name: 'Kontak kami'
  }
];

const NavStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.MYSTIC[100]};
  position: relative;
  z-index: 1;

  .dekstop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
    ${GLOBAL_SIZING_FONTS.TEXT_BASE};
    padding: 20px 0;
    background-color: ${COLORS.FUN_BLUE};
    color: ${COLORS.FUN_BLUE[400]};
  }
  .centerSide {
    ul {
      display: flex;
      flex-direction: row;
    }
    li {
      padding: 0 10px;
      cursor: pointer;
    }
  }

  .btn-register {
    ${GLOBAL_FLEX.CENTER};
    padding: 10px 30px 10px 20px;
    color: ${COLORS.MYSTIC[200]};
    background-color: ${COLORS.FUN_BLUE[500]};
    font-size: ${GLOBAL_SIZING_FONTS.TEXT_SM};
  }
`;

const Plane = styled(IconPlane)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const NavbarDekstop = () => {
  return (
    <NavStyled>
      <nav className='dekstop'>
        <div className='leftSide'>
          <h1>Logo</h1>
        </div>
        <div className='centerSide'>
          <ul>
            {menus.map((menu, i) => (
              <Link key={i} href={`${menu.link}`}>
                <a href={`${menu.link}`}>
                  <li>{menu.name}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className='rightSide'>
          <button className='btn-register'>
            <Plane />
            Daftar Sekarang
          </button>
        </div>
      </nav>
    </NavStyled>
  );
};

export default React.memo(NavbarDekstop);
