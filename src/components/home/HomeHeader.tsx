import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

import COLORS from "@styles/globalColors";

import Button from "../commons/Button";
import { idfNumber } from "../contact/ContactPage";
import { HeaderStyled, Plane, Whatsapp } from "./HomeStyled";

const HomeHeader: React.FC = () => {
  const handleContactMe = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${idfNumber}&text=Halo,%0ASaya%20mau%20bertanya%0Atentang%20IDF..%0A%0A`
    );
  };

  return (
    <HeaderStyled>
      <div className="heading">
        <div className="heading_image">
          <Image
            src="/img/plane_01.jpg"
            layout="responsive"
            width={"1440"}
            height={"1060"}
            objectFit="cover"
            sizes="100vw"
          />
        </div>
        <div className="heading_content">
          <div className="heading_content_wrapper">
            <h1 className="heading_title">Indonesia Dirgantara Flight</h1>
            <h2 className="heading_description">
              Lembaga Pendidikan Pramugari/Pramugara dan Staf Penerbangan
            </h2>
            <h2 className="heading_description">
              (IDF Samarinda - Kalimantan Timur)
            </h2>

            <div className="btn-group">
              <div className="_item">
                <Link href="/register">
                  <Button width="8rem" height="4rem">
                    <Plane />
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
              <div className="_item">
                <Button
                  width="8rem"
                  height="4rem"
                  border={`1px solid ${COLORS.MYSTIC[200]}`}
                  backgroundColorOne={"#fdfdfe59"}
                  backgroundColorTwo={"#fdfdfe40"}
                  color={`${COLORS.MYSTIC[300]}`}
                  onClick={handleContactMe}>
                  <Whatsapp />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default memo(HomeHeader);
