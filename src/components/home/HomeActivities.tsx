import Link from "next/link";
import { FC, memo } from "react";
import { HomeActivitiesContainer } from "src/components/home/HomeStyled";

import Button from "../commons/Button";

const HomeActivities: FC = () => {
  return (
    <HomeActivitiesContainer>
      <div className="activities_heading">
        <h1 className="activities_heading_title">Aktifitas kami di IDF</h1>
        <h2 className="activities_heading_description">
          Kegiatan rutin yang ada di Indonesia Dirgantara Flight
        </h2>
      </div>

      <div className="activities_content">
        <div className="activities_content_image">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="activities_content_image_wrapper" key={i}>
              <img
                width={"100%"}
                height={"100%"}
                src={`/img/kegiatan-siswa/image${i}.jpeg`}
              />
            </div>
          ))}
        </div>
        <Link href="testimony">
          <Button style={{ paddingTop: "5%" }}>Lihat lebih banyak ..</Button>
        </Link>
      </div>
    </HomeActivitiesContainer>
  );
};

export default memo(HomeActivities);
