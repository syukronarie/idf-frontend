import Image from "next/image";
import React, { memo } from "react";

import { TestimonyStyled } from "./HomeStyled";

const TestimonyData = [
  {
    id: "1",
    name: "Susilo Saputra",
    image: "/img/testimony/image1.jpeg",
    text:
      "Nama saya Susilo Saputra \n Saya alumni IDF jurusan Cargo program kuliah 1 tahun. \n terimakasih IDF karena saya sudah menempatakn saya \n untuk On Job Training ( OJT ) di AMC Pranoto \n Smarinda Kalimantan Timur \n Sukses selalu IDF 
  },
  {
    id: "2",
    name: "Uddana Prayoga",
    image: "/img/testimony/image4.jpeg",
    text:
      "Saya Uddana Prayoga, biasa dipanggil Udanna.\n Saya alumni IDF Angkatan 2017, jurusan STAF AIRLINES program diklat 6 bulan.\n Sebelumnya saya sudah pernah kuliah D3, tapi bukan pasion saya.\n Akhirnya saya kuliah di IDF dan saya merasa sesuai \n dengan keinginan saya yaitu belajar penerbangan \n dan sekarang saya bekerja di Bandar Udara \n APT. Pranoto Samarinda"
  },
  {
    id: "3",
    name: "Kaniawati",
    image: "/img/testimony/image3.jpeg",
    text:
      "Saya Kaniawati, alumni IDF 2017, jurusan STAF AIRLINES, program kuliah 1 tahun.\n Saya ucapkan terimakasih tak terhingga kepada IDF \n karena telah menjembatani dan mempermudah saya dalam OJT ( On Job Training ) \n AMC Bandar Udara APT Pranoto Samarinda.\n SALAM SEMANGAT IDF Samarinda!"
  },
  {
    id: "4",
    name: "Siregar Kharisma Aulia",
    image: "/img/testimony/image2.jpeg",
    text:
      "Nama saya Siregar Kharisma Aulia, \n Saya alumni IDF Angkatan 2017, jurusan STAF AIRLINES program kuliah 1 tahun.\n Saya ucapkan terimakasih tak terhingga kepada IDF \n karena telah menjembatani dan mempermudah saya dalam OJT ( On Job Training ) \n AMC Bandar Udara APT Pranoto Samarinda.\n SUKSES SELALU IDF Samarinda!"
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
