import Image from "next/image";
import React, { memo } from "react";

import { TestimonyStyled } from "./HomeStyled";

const TestimonyData = [
  {
    id: "1",
    name: "Susilo Saputra",
    image: "/img/testimony/image1.jpeg",
    text:
      "Haaaaii namaku Susilo Saputra biasa dipanggil Lilo. \n\n Kuliah di IDF Samarinda tuh keren loh.\n\n Bangganya.... aku ditempatkan magang di AMC bandara APT Pranoto Samarinda. \n\n Ikutan yuuuk segera daftar" 
  },
  {
    id: "2",
    name: "Jessica Anjelia",
    image: "/img/testimony/image4.jpg",
    text:
      "Hy nama ku Jessica Anjelia,\n\n aku lulusan Indonesia Dirgantara Flight ( IDF ) sekolah penerbangan terbaik di Samarinda. \n\n Aku alumni tahun 2020, selama di IDF aku mendapat pengalaman di dunia penerbangan karena ada On Job Training ( OJT ) dan bisa di bantu untuk penempatan kerja. \n\n Belajar di IDF sangat menyenangkan karena mendapat ilmu yang bisa di praktekkan secara langsung contohnya aku yang di bantu OJT di bagian Ground Handling - CDA di bandara APT Pranoto Samarinda.\n\n 
       Jadi bagi teman - teman yang ingin berkarir di penerbangan IDF lah solusinya. Ayo buruan daftar sekarang."
  },
  {
    id: "3",
    name: "Muhammad Jahrani",
    image: "/img/testimony/image3.jpeg",
    text:
      "Hallo, Nama Saya Muhammad Jahrani lulusan IDF Samarinda. Bagi teman - teman yang ingin cepat kerja / On Job Training (OJT) ayo buruan daftar ke Sekolah Penerbangan terbaik di samarinda. Disini teman - teman akan di latih oleh para praktisi profesional yang mampu mengubah pola pikir untuk mampu bersaing di dunia kerja khususnya dunia penerbangan...Ayo buruan gabung dengan IDF........"
  },
  {
    id: "4",
    name: "Sella",
    image: "/img/testimony/image2.jpeg",
    text:
      "Nama saya Sella, berasal dari kota Samarinda - Kalimantan Timur \n\n Saya alumni IDF Angkatan 2017, jurusan STAF AIRLINES program kuliah 1 tahun.\n\n Saya bekerja di Batik Air bandara Apt Pranoto Samarinda. \n\n Tak ada yang sia - sia, semua bergantung dari usaha keras dan tak patah semangat. \n\n Belajarlah di IDF jika ingin kerja di maskapai \n\n SUKSES IDF Samarinda"
  }
];

const HomeTestimony: React.FC = () => {
  return (
    <TestimonyStyled>
      <div className="testimony_heading">
        <h1 className="testimony_heading_title">
          Pendapat dari para Alumni IDF{" "}
        </h1>
        <h2 className="testimony_heading_description">
          Dengarkan beberapa dari alumni kami
          <br /> apa yang mereka lakukan hari ini dalam karier penerbangan baru
          mereka.
        </h2>
      </div>

      <div className="testimony_content">
        {TestimonyData.map((testimony) => (
          <div className="testimony_content_square" key={testimony.id}>
            <Image
              width={400}
              height={400}
              src={testimony.image}
              objectFit="cover"
            />
            <div className="testimony_content_square_divider">
              <h4 className="testimony_content_square_divider_text">
                Alumni IDF
              </h4>
            </div>
            <div className="testimony_content_square_text">
              <h3 className="testimony_content_square_text_name">
                {testimony.name}
              </h3>
              <p className="testimony_content_square_text_message">
                {testimony.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TestimonyStyled>
  );
};

export default memo(HomeTestimony);
