import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { NavStyled, Plane, SideBarStyled } from "./NavbarStyled";

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
  {
    link: "/testimony",
    name: "Kegiatan"
  },
  {
    link: "/contact",
    name: "Kontak kami"
  }
];

const NavbarDekstop: React.FC = () => {
  const [shadowNavbar, setShadowNavbar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 60 ? setShadowNavbar(true) : setShadowNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    showSideBar ? setShadowNavbar(true) : setShadowNavbar(false);
  }, [showSideBar]);

  return (
    <>
      <NavStyled shadow={shadowNavbar}>
        <nav className="dekstop">
          <IconButton
            color="inherit"
            aria-label="Menu"
            style={{
              position: "absolute",
              top: "9px"
            }}
            onClick={() => setShowSideBar(!showSideBar)}
            className="burger">
            <MenuIcon />
          </IconButton>
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

      <SideBarStyled>
        <ul
          className={`${showSideBar ? "sideBarActive" : "sideBarDeactive"}`}
          onClick={() => setShowSideBar(!showSideBar)}>
          {menus.map((menu, i) => (
            <Link key={i} href={`${menu.link}`}>
              <a href={`${menu.link}`}>
                <li>{menu.name}</li>
              </a>
            </Link>
          ))}
        </ul>
      </SideBarStyled>
    </>
  );
};

export default React.memo(NavbarDekstop);
