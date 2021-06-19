import Image from "next/image";
import React, { memo } from "react";

import { TestimonyStyled } from "./HomeStyled";

const TestimonyData = [
  {
    id: "1",
    name: "Ikhsan Maulana",
    image: "/img/testimony/image1.jpeg",
    text:
      "Saya IKHSAN MAULANA biasa dipanggil IKHSAN berasal dari Jambi - Sumatera \n Saya alumni IDF 2019 jurusan STAF AIRLINES program kuliah 1 tahun. \n Saya kerja di SN Cargo bandara Apt Pranoto Samarinda. \n \n Yang muda yang berkarya. \n \n Terima kasih IDF telah memberikan bekal ilmu."
  },
  {
    id: "2",
    name: "Sella",
    image: "/img/testimony/image4.jpeg",
    text:
      "Nama saya Sella, berasal dari kota Samarinda - Kalimantan Timur.\n Saya alumni IDF Angkatan 2017, jurusan STAF AIRLINES program kuliah 1 tahun.\n Saya bekerja di Batik Air bandara Apt Pranoto Samarinda.\n Tak ada yang sia - sia, semua bergantung dari usaha keras dan tak patah semangat.\n Belajarlah di IDF jika ingin kerja di dunia penerbangan.\n SUKSES IDF Samarinda."
  },
  {
    id: "3",
    name: "Haikal Rahmadani",
    image: "/img/testimony/image3.jpeg",
    text:
      "Saya Haikal Rahmadani, biasa dipanggil Haikal, asal kota dari Samarinda - Kalimantan Timur.\n Saya alumni IDF 2017, jurusan STAF AIRLINES, program kuliah 1 tahun..\n Saat ini saya bekerja di SN Cargo bandara Apt Pranoto, dan sempat juga bekerja di Sriwijaya Air selama 1 tahun..\n Saya ucapkan terimakasih tak terhingga kepada IDF karena telah menjembatani dan mempermudah saya dalam mencari pekerjaan di dunia penerbangan..\n SALAM SEMANGAT IDF Samarinda!"
  },
  {
    id: "4",
    name: "Madzullin Farida Adhan",
    image: "/img/testimony/image2.jpeg",
    text:
      "Nama saya Madzullin Farida Adhan, biasa dipanggil Ririn berasal dari kota Tenggarong - Kalimantan Timur.\n Saya alumni IDF Angkatan 2017, jurusan STAF AIRLINES program kuliah 1 tahun.\n Saya sekarang bekerja di Maskapai Lion Air Group Bandar Udara Sepinggan Balikpapan.\n “Jangan berhenti mengejar mimpimu, meskipun kamu punya semua alasan untuk menyerah. Jadilah generasi muda yang berani sukses di usia muda.“"
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
