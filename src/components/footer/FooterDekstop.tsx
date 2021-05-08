import Link from "next/link";
import React, { memo } from "react";
import styled from "styled-components";

import { Plane } from "@home/HomeStyled";

import Button from "../commons/Button";
import { FooterContainer } from "./FooterStyled";

const FooterDekstop: React.FC = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <FooterContainer>
      <div className="footer_heading">
        <h1 className="footer_heading_title">
          Apakah kamu siap memulai petualangan belajarmu bersama kami?
        </h1>
      </div>

      <div className="footer_content">
        <div className="footer_content_text">
          <p>
            Para profesional penerbangan lulus dari IDF.
            <br />
            Kami bekerja dengan maskapai penerbangan untuk memberikan pelatihan
            penerbangan terbaik.
          </p>
          <p>
            Di mana pun Anda berada, Anda dapat memiliki akses ke pelatihan
            kami!
          </p>
        </div>
        <Link href="/register">
          <Button width="13rem" height="4rem">
            <Plane />
            Daftar Sekarang
          </Button>
        </Link>
        <div className="footer_content_copyright">
          <p>© Indonesia Dirgantara Flight {year}</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default memo(FooterDekstop);
