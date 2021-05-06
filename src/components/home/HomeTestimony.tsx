import Image from "next/image";
import { memo } from "react";
import COLORS from "src/assets/styles/globalColors";
import GLOBAL_SIZING_FONTS from "src/assets/styles/globalSizingFonts";
import GLOBAL_SIZINGS from "src/assets/styles/globalSizings";
import styled from "styled-components";

import GLOBAL_FLEX from "@styles/globalFlex";

const TestimonyStyled = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 6rem;

  .testimony_heading {
    background-image: url("/img/map.jpg");
    width: 100%;

    &_title {
      ${GLOBAL_SIZING_FONTS.TEXT_2XL}
      color: white;
      text-align: center;
      padding-top: ${GLOBAL_SIZINGS.xl3};
    }

    &_description {
      ${GLOBAL_SIZING_FONTS.TEXT_BASE}
      text-align: center;
      color: ${COLORS.FUN_BLUE[200]};
      padding-top: 10px;
      padding-bottom: 25px;
    }
  }

  .testimony_content {
    display: flex;
    justify-content: center;
    width: 95%;
    height: auto;
    padding: 1% 0;
    margin: auto;

    &_square {
      width: 20rem;
      margin: 30px 10px;
      height: auto;
      background-color: ${COLORS.MYSTIC[100]};
      border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};
      transition: box-shadow 0.25s ease-in-out;

      :hover {
        transition: box-shadow 0.25s ease-in-out;
        box-shadow: 0 -1px 3.6px rgba(0, 0, 0, 0.039),
          0 0.6px 10px rgba(0, 0, 0, 0.058), 0 6.8px 24.1px rgba(0, 0, 0, 0.073),
          0 38px 80px rgba(0, 0, 0, 0.11);
      }

      &_image {
        object-fit: cover;
      }

      &_divider {
        ${GLOBAL_FLEX.CENTER}
        padding: 10px;
        color: ${COLORS.MYSTIC[500]};
        background-color: ${COLORS.FUN_BLUE[500]};

        &_text {
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
      }

      &_text {
        padding: 10px 25px 25px 25px;

        &_name {
          ${GLOBAL_SIZING_FONTS.TEXT_XL}
        }

        &_message {
          ${GLOBAL_SIZING_FONTS.TEXT_BASE}
        }
      }
    }
  }
`;

const TestimonyData = [
  {
    id: "1",
    name: "Rere Effendy Gosnes",
    image: "/img/testimony/image1.jpeg",
    text:
      "Saya Rere Effendy Gosnes dari kota Bontang Kalimantan Timur.\n Saya alumni IDF 2017, jurusan STAF AIRLINES program kuliah 1 tahun.\n Saya bekerja di bandara Apt Pranoto Samarinda Kalimantan Timur di bagian Apron Movement Control.\n \n Saya berterima kasih kepada IDF Samarinda sebagai sarana belajar dan menimba ilmu.\n \n Selalu percaya diri dan semangat karena usaha selalu memberikan hasil yang memuaskan jika usaha itu ditekuni dengan sungguh-sungguh.\n SUKSES IDF Samarinda"
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
            <div className="testimony_content_square_image">
              <Image
                width={400}
                height={400}
                src={testimony.image}
                objectFit="cover"
              />
            </div>
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
