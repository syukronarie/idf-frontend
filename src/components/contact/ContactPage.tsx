import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { Grid, TextField } from "@material-ui/core";
import { Alert as AlertStyled, AlertTitle } from "@material-ui/lab";
import NavbarDekstop from "@navbar/NavbarDekstop";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

import Button from "../commons/Button";
import FooterDekstop from "../footer/FooterDekstop";

const ContactStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;

  .contact-content {
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
        margin: 8%;
        color: ${COLORS.MYSTIC[100]};

        &_title {
          ${GLOBAL_SIZING_FONTS.TEXT_3XL}
        }

        &_description {
          margin-top: 1rem;
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
      }
    }

    &_two,
    &_three {
      ${GLOBAL_FLEX.CENTER};
      width: 100%;

      &_message {
        margin-top: 3%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 50%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        &_content {
          ${GLOBAL_FLEX.CENTER}
          flex-direction: column;

          h3 {
            font-size: 20px;
            font-weight: 600;
            margin-top: 4%;
            margin-right: 0px;
            margin-bottom: 3%;
            margin-left: 0px;
          }

          p {
            margin-top: 0.5%;
            margin-right: 8%;
            margin-bottom: 3%;
            margin-left: 8%;
            line-height: 20px;
            text-align: center;
          }
        }

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }
    }

    &_three {
      width: 51%;
      margin: auto;
      justify-content: space-around;

      &_left {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 48%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }

      &_right {
        margin-top: 6%;
        margin-right: 0%;
        margin-bottom: 0%;
        margin-left: 0%;
        width: 48%;
        background-color: ${COLORS.MYSTIC[100]};
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};

        :hover {
          /* box-shadow: 1px 6px 20px #221b1c1f; */
          box-shadow: 0px 6px 20px #221b1c1f;
        }
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-top: 4%;
        margin-right: 0px;
        margin-bottom: 3%;
        margin-left: 0px;
      }

      p {
        margin-top: 0.5%;
        margin-right: 8%;
        margin-bottom: 9%;
        margin-left: 8%;
        line-height: 20px;
        text-align: center;
      }
    }
  }
`;

const Alert = styled(AlertStyled)`
  position: fixed;
  z-index: 3;
  top: 4%;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  pointer-events: all;
  animation: fadeOut 2.5s;

  /* .alert-out {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-name: fadeOut;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: running;
  } */

  @keyframes fadeOut {
    0% {
      opacity: 0;
      transform: translateY(-100%);
      transform-origin: 0 0;
    }
    10% {
      opacity: 1;
      transform: translateY(0);
      transform-origin: 0 0;
    }
  }
`;

const ContactPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const idfNumber = "6285715555899";

  const handleMessage = () => {
    if (name && message && email && phoneNumber) {
      window.open(
        `https://api.whatsapp.com/send?phone=${idfNumber}&text=Halo,%0ANama%20saya%20${name}%0A${message}%0A%0A=======================================%0A%0A%0A%0A%0A%0ABerikut%20tertera%20Email%20dan%20Nomor%20Telepon%20saya%20yang%20dapat%20dihubungi:%0AEmail:%20${email}%0ANomor%20Telepon:%20${phoneNumber}`
      );
    } else {
      setErrorMessage("Silakan lengkapi semua form yang tersedia");
    }
  };

  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }

  return (
    <>
      <NavbarDekstop />
      <ContactStyled>
        {errorMessage.length > 0 && (
          <Alert severity="warning">
            <AlertTitle>Mohon maaf</AlertTitle>
            {errorMessage}
          </Alert>
        )}
        <div className="contact-content">
          <div className="contact-content_one">
            <div className="contact-content_one_image">
              <Image
                src="/img/background/bkg-sky.jpg"
                layout="responsive"
                width={"1200"}
                height={"371"}
                objectFit="cover"
                sizes="100vw"
              />
            </div>
            <div className="contact-content_one_text">
              <h3 className="contact-content_one_text_title">Kontak Kami</h3>
              <p className="contact-content_one_text_description">
                Perlu menghubungi kami?
              </p>
              <p className="contact-content_one_text_description">
                Kami di sini untuk membantu! Hubungi Departemen Layanan
                Pelanggan kami melalui salah satu metode di bawah ini dan beri
                tahu kami bagaimana kami dapat mendukung Anda. Pernyataan misi
                kami adalah "Untuk memperlakukan setiap klien seperti
                satu-satunya klien kami ..."
              </p>
              <p className="contact-content_one_text_description">
                Hubungi kami dengan mengisi formulir di bawah ini, melalui
                email, telepon, teks atau surat Selain itu, Anda dapat mengikuti
                kami di{" "}
                <a href="https://www.instagram.com/generation3_idf/">
                  Facebook
                </a>{" "}
                dan{" "}
                <a href="https://www.facebook.com/IDF-Samarinda-111087487148952/">
                  Instagram!
                </a>
              </p>
              <p className="contact-content_one_text_description">
                Kampus Indonesia Dirgantara Flight berlamat di Jl. M. Yamin No.
                6 gedung Yayasan Tunas Kelapa Samarinda
              </p>
            </div>
          </div>

          <div className="contact-content_two">
            <div className="contact-content_two_message">
              <div className="contact-content_two_message_content">
                <h3 style={{ paddingTop: "2%" }}>Kirim pesan kepada kami</h3>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <p style={{ fontSize: "17px" }}>
                      Isi formulir di bawah ini dan salah satu perwakilan kami
                      akan menghubungi Anda.
                    </p>
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      label="Nama Lengkap"
                      variant="outlined"
                      fullWidth
                      required
                      // onChange={(e) =>
                      // setStudentRegister({
                      //   ...studentRegister,
                      //   fullName: e.target.value
                      // })
                      // }
                    />
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      label="No handphone yang dapat dihubungi?"
                      variant="outlined"
                      fullWidth
                      required
                      // onChange={(e) =>
                      // setStudentRegister({
                      //   ...studentRegister,
                      //   fullName: e.target.value
                      // })
                      // }
                    />
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      // onChange={(e) =>
                      // setStudentRegister({
                      //   ...studentRegister,
                      //   fullName: e.target.value
                      // })
                      // }
                    />
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      label="Pesan"
                      variant="outlined"
                      rows={6}
                      multiline
                      fullWidth
                      required
                      // onChange={(e) =>
                      // setStudentRegister({
                      //   ...studentRegister,
                      //   fullName: e.target.value
                      // })
                      // }
                    />
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <Button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1%",
                        marginBottom: "6%"
                      }}
                      onClick={handleMessage}
                      width="30%">
                      Kirim
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>

          <div className="contact-content_three">
            <div className="contact-content_three_left">
              <h3 className="contact-content_one_text_title">Email</h3>
              <p className="contact-content_one_text_description">
                indonesiadirgantaraflight@mail.com
              </p>
            </div>

            <div className="contact-content_three_right">
              <h3 className="contact-content_one_text_title">No Telepon</h3>
              <p className="contact-content_one_text_description">
                085715555899
              </p>
            </div>
          </div>
        </div>
        <FooterDekstop />
      </ContactStyled>
    </>
  );
};

export default ContactPage;
