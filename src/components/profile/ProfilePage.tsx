import Image from "next/image";
import React from "react";

import NavbarDekstop from "@navbar/NavbarDekstop";

import FooterDekstop from "../footer/FooterDekstop";
import { ProfileStyled } from "./ProfileStyled";

const ProfilePage: React.FC = () => {
  return (
    <>
      <NavbarDekstop />
      <ProfileStyled>
        <div className="profile_content">
          <div className="profile_content_one">
            <div className="profile_content_one_image">
              <Image
                src="/img/background/bkg-sky.jpg"
                layout="responsive"
                width={"1200"}
                height={"371"}
                objectFit="cover"
                sizes="100vw"
              />
            </div>
            <div className="profile_content_one_text">
              <h3 className="profile_content_one_text_title">
                Indonesia Dirgantara Flight
              </h3>
              <p className="profile_content_one_text_description">
                IDF adalah Lembaga Pendidikan Staf Airlines dan Kepramugarian
                yang merupakan wujud peran serta tanggung jawab dalam usaha
                mencerdaskan kehidupan bangsa.
              </p>
            </div>
          </div>
          <div className="profile_content_two">
            <div className="profile_content_two_vision">
              <div className="profile_content_two_vision_content">
                <h3>Visi & Misi</h3>
                <h4>Visi</h4>
                <p>
                  Sebagai Institusi / Lembaga Pendidikan Mandiri yang menyiapkan
                  Airlines unggul dan berakhlak.
                </p>
                <h4>Misi</h4>
                <p>
                  Mendidik dan melatih dengan mengacu perkembangan perusahaan
                  penerbangan ( maskapai ) maupun Bandar Udara dan diaplikasikan
                  dalam bentuk Magang kerja agar menghasilkan SDM professional
                  yang berguna untuk kesejahteraan bangsa.
                </p>
              </div>
            </div>
          </div>

          <div className="profile_content_three">
            <div className="profile_content_three_goals">
              <div className="profile_content_three_goals_content">
                <h3>Tujuan Pendidikan</h3>
                <p>
                  a. Membantu pemerintah dalam pembangunan nasional khususnya di
                  bidang Pendidikan Non Formal untuk mendidik dan melatih
                  generasi muda menjadi manusia pembangunan dengan bekal ilmu
                  yang mantap, keahlian yang cukup, professional kerja, dan
                  mempunyai etos kerja yang tangguh sesuai dengan bidang
                  keahliannya.
                </p>
                <p>
                  b. Memberikan kesempatan kepada generasi muda untuk menempa
                  diri dengan ilmu dan keterampilan aviasi sehingga mempunyai
                  bekal untuk memasuki lapangan kerja dalam dunia industri jasa
                  penerbangan nasional maupun Internasional.
                </p>
                <p style={{ marginBottom: "0.5%" }}>
                  c. Mempersiapkan tenaga terampil yang mempunyai kualifikasi
                  keilmuan dan profesionalitas yang memadai terutama dalam
                  bidang industri jasa penerbangan dengan kualifikasi kompetensi
                  sebagai:
                </p>

                <p style={{ margin: "0.5% 9%" }}>
                  ??? Staf Airlines:
                  <br />
                  Greeting Service, Announcement, Ticketing & Reservasi,
                  Check-in Counter, Passasi.
                </p>
                <p style={{ margin: "0.5% 9%" }}>
                  ??? Ground Staff:
                  <br />
                  Passenger Boarding Stair, Deck Loader, Aircraft Towing,
                  Pushback Towing, Baggage Towing Treactor.
                </p>
                <p style={{ margin: "0.5% 9% 3%" }}>
                  ??? Cabin Crew:
                  <br />
                  Pramugara ??? Pramugari.
                </p>

                <p>
                  d. Mempersiapkan manusia pembangunan yang iman dan takwa
                  mempunyai semangat kebersamaan dalam kerja.
                </p>

                <p>
                  e. Membentuk tenaga ahli professional yang mempunyai kemampuan
                  analisis yang tinggi dibidang transportasi udara serta
                  memiliki kesadaran bertanggung jawab, mampu dan sanggup
                  mengembangkan serta menyebarkan ilmu pengetahuan yang
                  dimilikinya, bermoral luhur dan berjiwa mengamalkan serta
                  mengamankan Pancasila UUD 45.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterDekstop />
      </ProfileStyled>
    </>
  );
};

export default ProfilePage;
