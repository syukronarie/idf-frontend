import Button from "src/components/commons/Button";
import styled from "styled-components";

import {
 Button as ButtonMUI,
 Container,
 FormControl,
 Grid,
 InputLabel,
 MenuItem,
 Select,
 TextField
} from "@material-ui/core";
import NavbarDekstop from "@navbar/NavbarDekstop";
import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";

const Wrapper = styled.div`
  .form-wrapper {
    ${GLOBAL_FLEX.START}
    flex-direction: column;

    &__form {
      width: 100%;
      background-color: ${COLORS.MYSTIC[100]};
      margin: 2% 0%;

      .register-title {
        text-align: center;
        font-size: 35px;
        padding-top: 10%;
        color: ${COLORS.FUN_BLUE[500]};
      }

      p,
      li {
        line-height: 25px;
      }

      b {
        font-weight: 650;
      }
    }
  }

  .upload-foto {
    display: none;
  }
`;

const RegisterPage: React.FC = () => {
  return (
    <>
      <NavbarDekstop />
      <Wrapper>
        <Container maxWidth="lg">
          <form className="form-wrapper__form" noValidate autoComplete="off">
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={3}>
              <Grid item xs={12} sm={7}>
                <p className="register-title">Pendaftaran Online</p>
              </Grid>

              <Grid item xs={12} sm={7}>
                <p style={{ fontSize: "17px", paddingTop: "4%" }}>
                  <b>Petunjuk Pengisian :</b>
                </p>
                <ul>
                  <li>1. Diisi dengan huruf balok</li>
                  <li>
                    2. Pengisian formulir data harap disesuaikan dengan ijazah
                  </li>
                  <li>3. Tanda *) wajib diisi</li>
                </ul>
                <p style={{ paddingTop: "5%" }}>
                  <b>I. IDENTITAS CALON MAHASISWA</b>
                </p>
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Nama Lengkap"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Alamat"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="RT / RW"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Kabupaten"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Provinsi"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Kode Pos"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="No. Telepon / HP"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Tempat & Tgl. Lahir"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Agama"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Jenis Kelamin"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Nama SMA / SMK Asal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Alamat SMA / SMK Asal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Lulus Tahun"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <p style={{ paddingTop: "5%" }}>
                  <b>II. PROGRAM DAN JURUSAN YANG DIPILIH</b>
                </p>
              </Grid>

              <Grid item xs={12} sm={7}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Program Keahlian Profesi 1 Tahun :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Program Keahlian Profesi 1 Tahun">
                    <MenuItem value="Staff Airlines">Staff Airlines</MenuItem>
                    <MenuItem value="Pramugari Pramugara">
                      Pramugari Pramugara
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={7}>
                <p style={{ paddingTop: "5%" }}>
                  <b>III. ORANG TUA WALI</b>
                </p>
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Nama Lengkap"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Alamat"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="No. Telepon / HP"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Pendidikan"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  id="outlined-basic"
                  label="Pekerjaan"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  className="upload-foto"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <ButtonMUI variant="outlined" color="primary" size="large">
                    Upload Pas Foto 3 x 4
                  </ButtonMUI>
                </label>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8%",
                    marginBottom: "15%"
                  }}
                  width="30%">
                  Daftar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
