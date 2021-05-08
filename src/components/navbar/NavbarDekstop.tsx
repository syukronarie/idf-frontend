import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { NavStyled, Plane } from "./NavbarStyled";

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
    name: "Testimoni"
  },
  {
    link: "/contact",
    name: "Kontak kami"
  }
];

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
