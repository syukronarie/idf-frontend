import Image from "next/image";
import React, { memo } from "react";

import { TestimonyStyled } from "./HomeStyled";

const TestimonyData = [
  {
    id: "1",
    name: "Nur Budi Setyanti",
    image: "/img/testimony/image1.jpeg",
    text:
      "Hy Semuanya.....\n Perkenalkan Namaku Nur Budi Setyanti aku lulusan Indonesian Dirgantara Flight (IDF) Samarinda. \n Walaupun kuliahku di sekolah penerbangan tetapi IDF berbeda, \n IDF bisa menyalurkan ku bekerja tidak hanya di lingkup penerbangan saja lho. \n Ada berbagai mitra kerja IDF Samarinda salah satunya di perbangkan, contohnya aku kerja di Panin Bank. /n Terimakasih IDF Samarinda telah membantuku dalam penempatan kerja.....\n SUKSES SELALU IDF!" 
  },
  {
    id: "2",
    name: "Juniansyah",
    image: "/img/testimony/image4.jpg",
    text:
      "Hy nama saya Juniansyah saya alumni Indonesia Dirgantara Flight,\n\n IDF Samarinda tahun 2020. \n\n Saya ambil DIKLAT jurusan STAF AIRLINES-Passasi. \n Bersama IDF penempatan kerja ataupun OJT menjadi mudah karena adanya hubungan dengan mitra kerja di bandar udara. \n Ayo gabung dengan IDF untuk mewujudkan mimpi berkarir di bidang penerbangan."
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
