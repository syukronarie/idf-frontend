import React from "react";

import { Grid } from "@material-ui/core";
import NavbarDekstop from "@navbar/NavbarDekstop";

import FooterDekstop from "../footer/FooterDekstop";
import { Wrapper } from "./TestimonyStyled";

const TestimonyPage: React.FC = () => {
  return (
    <Wrapper>
      <NavbarDekstop />
      <Grid container>
        <Grid item xs={12}>
          <h1 className="heading-title">
            INGIN KERJA DI MASKAPAI PENERBANGAN ATAU DI BANDARA?
          </h1>
        </Grid>
        <Grid container>
          <div className="masonry">
            {/* <Grid item> */}
            {Array.from({ length: 25 }).map((_, i: number) => (
              <div className="masonryItem" key={i}>
                <img
                  className="masonryImage"
                  src={`/img/testimoni-page/image${i}.jpeg`}
                  alt="kegiatan siswa indonesia dirgantara flight samarinda"
                />
              </div>
            ))}
          </div>

          {/* </Grid> */}
        </Grid>
      </Grid>
      <FooterDekstop />
    </Wrapper>
  );
};

export default TestimonyPage;
