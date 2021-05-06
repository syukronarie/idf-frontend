import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import COLORS from "src/assets/styles/globalColors";
import GLOBAL_FLEX from "src/assets/styles/globalFlex";
import GLOBAL_SIZING_FONTS from "src/assets/styles/globalSizingFonts";
import IconPlane from "src/assets/svg/IconPlane";
import styled, { css } from "styled-components";

/**
 * TODO: CREATING NAVBAR DEKSTOP
 * Including:
 * [ ] Logo Icon
 * [*] Menus
 * [ ] Search
 */

const menus = [
  {
    link: "/",
    name: "Beranda"
  },
  {
    link: "/profile",
    name: "Profile"
  },
  {
    link: "/register",
    name: "Pendaftaran Online"
  },
  // {
  //   link: "/testimony",
  //   name: "Testimoni"
  // },
  {
    link: "/contact",
    name: "Kontak kami"
  }
];

type PropsNavbarStyle = {
  shadow: boolean;
};

const NavStyled = styled.div<PropsNavbarStyle>`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.MYSTIC[100]};
  z-index: 3;

  ${(props) =>
    props.shadow
      ? css`
          transition: 0.3s ease-in-out;
          box-shadow: #0000001a 1px 3px 10px 0px;
        `
      : ""}

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

const NavbarDekstop: React.FC = () => {
  const [shadowNavbar, setShadowNavbar] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 60 ? setShadowNavbar(true) : setShadowNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <NavStyled shadow={shadowNavbar}>
      <nav className="dekstop">
        <div className="leftSide">
          <Link href="/">
            <a href="/">
              <Image
                width="235px"
                height="44px"
                src="/img/logo-indonesia-dirgantara-flight.png"
                alt="logo-indonesia-dirgantara-flight"
              />
            </a>
          </Link>
        </div>
        <div className="centerSide">
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
        <div className="rightSide">
          <Link href="/register">
            <button className="btn-register">
              <Plane />
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </nav>
    </NavStyled>
  );
};

export default React.memo(NavbarDekstop);
