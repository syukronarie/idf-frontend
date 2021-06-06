import Image from "next/image";
import React from "react";

import { Grid, TextField } from "@material-ui/core";
import { AlertTitle } from "@material-ui/lab";
import NavbarDekstop from "@navbar/NavbarDekstop";

import Button from "../commons/Button";
import FooterDekstop from "../footer/FooterDekstop";
import { Alert, ContactStyled } from "./ContactStyled";

export const idfNumber = "628112952047";

const ContactPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

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
             
              </p>
              <p className="contact-content_one_text_description">
                Hubungi kami sekarang juga untuk bisa berkarir dibidang penerbangan.
              </p>
              <p className="contact-content_one_text_description">
                Dengan mengisi formulir di bawah ini, melalui
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
                Atau datang langsung ke kampus kami yang beralamat di
                Jl. Pipit No. 22 Bandara Temindung
                Samarinda - Kalimantan Timur
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      label="No HP/WA yang bisa dihubungi?"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setMessage(e.target.value)}
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
                      width="30%"
                      onClick={handleMessage}>
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
                idfsamarinda01@gmail.com
              </p>
            </div>

            <div className="contact-content_three_right">
              <h3 className="contact-content_one_text_title">No Telepon (WA)</h3>
              <p className="contact-content_one_text_description">
                {idfNumber}
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
