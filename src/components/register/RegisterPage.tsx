import { useRouter } from "next/router";
import React from "react";
import Button from "src/components/commons/Button";
import REGISTER_CONSTANT from "src/utils/constants/RegisterConstant";
import useRegister from "src/utils/hooks/useRegister";
import { RegisterTypes } from "src/utils/types/idf";

import {
 Container,
 FormControl,
 Grid,
 InputLabel,
 MenuItem,
 Select,
 TextField
} from "@material-ui/core";
import NavbarDekstop from "@navbar/NavbarDekstop";

import { RegisterStyled } from "./RegisterStyled";

const RegisterPage: React.FC = () => {
  const [studentRegister, setStudentRegister] = React.useState<RegisterTypes>();
  const [_, dispatch] = useRegister();
  const router = useRouter();
  const [registerDate] = React.useState(new Date());

  React.useEffect(() => {
    if (registerDate) {
      setStudentRegister({ ...studentRegister, registerDate });
    }
  }, []);

  const handleRegister = () => {
    if (studentRegister) {
      dispatch({
        type: REGISTER_CONSTANT.SET_DATA_REGISTER,
        payload: studentRegister
      });
    }

    alert("Pendaftaran Berhasil!");
    alert("Selanjutnya kamu akan dihubungi oleh IDF, Terima kasih");

    router.push("/");
  };

  // Handle Register
  // React.useEffect(() => {
  //   handleRegister()
  // }, []);

  return (
    <>
      <NavbarDekstop />
      <RegisterStyled>
        <Container maxWidth="lg">
          <div className="form-wrapper__form">
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
                  autoComplete="off"
                  id="outlined-basic"
                  label="Nama Lengkap"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      fullName: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Alamat"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      address: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="RT / RW"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      rtRw: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Kabupaten"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      district: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Provinsi"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      province: e.target.value
                    })
                  }
                />
              </Grid>

              {/* <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Kode Pos"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      posCode: e.target.value
                    })
                  }
                />
              </Grid> */}

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="No. Telepon / HP"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      phoneNumber: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Tempat Lahir"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      birthOfPlace: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Tanggal Lahir"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      birthOfDate: e.target.value
                    })
                  }
                />
              </Grid>

              {/* <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Agama"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      religion: e.target.value
                    })
                  }
                />
              </Grid> */}

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Jenis Kelamin"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      gender: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Nama SMA / SMK Asal"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      nameOfHighSchool: e.target.value
                    })
                  }
                />
              </Grid>

              {/* <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Alamat SMA / SMK Asal"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      addressOfHighSchool: e.target.value
                    })
                  }
                />
              </Grid> */}

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Lulus Tahun"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      graduation: e.target.value
                    })
                  }
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
                    value={
                      studentRegister?.expertiseProgram
                        ? studentRegister.expertiseProgram
                        : ""
                    }
                    // onChange={handleChange}
                    onChange={(e) =>
                      setStudentRegister({
                        ...studentRegister,
                        expertiseProgram: e.target.value.toString()
                      })
                    }
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
                  autoComplete="off"
                  id="outlined-basic"
                  label="Nama Lengkap"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      parentFullName: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Alamat"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      parentAdress: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="No. Telepon / HP"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      parentPhoneNumber: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Pendidikan"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      parentEducation: e.target.value
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="Pekerjaan"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    setStudentRegister({
                      ...studentRegister,
                      parentJob: e.target.value
                    })
                  }
                />
              </Grid>

              {/* <Grid item xs={12} sm={7}>
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
              </Grid> */}

              <Grid item xs={12} sm={7}>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8%",
                    marginBottom: "15%"
                  }}
                  onClick={handleRegister}
                  width="30%">
                  Daftar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </RegisterStyled>
    </>
  );
};

export default RegisterPage;
