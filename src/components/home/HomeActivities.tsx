import Image from "next/image";
import { FC, memo } from "react";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";
import GLOBAL_SIZINGS from "@styles/globalSizings";

const HomeActivitiesContainer = styled.div`
  ${GLOBAL_FLEX.CENTER}
  flex-direction: column;
  width: 100%;
  background-color: #dddddd;
  margin-top: 1rem;

  .activities_heading {
    ${GLOBAL_FLEX.CENTER}
    flex-direction: column;
    width: 100%;
    background-color: ${COLORS.MYSTIC[100]};
    height: auto;

    &_title {
      ${GLOBAL_SIZING_FONTS.TEXT_2XL}
      color: ${COLORS.FUN_BLUE[500]};
      text-align: center;
      padding-top: ${GLOBAL_SIZINGS.xl5};
    }

    &_description {
      ${GLOBAL_SIZING_FONTS.TEXT_BASE}
      color: ${COLORS.FUN_BLUE[500]};
      text-align: center;
      padding-bottom: ${GLOBAL_SIZINGS.xl5};
    }
  }

  .activities_content {
    ${GLOBAL_FLEX.CENTER}

    &_image {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 1200px;
      margin: auto;

      &_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid 3px ${COLORS.FUN_BLUE[500]};
        padding: 30px 0 0;
        margin: 0 25px;
      }

      img {
        transition: box-shadow 1.5s ease-out;
        object-fit: cover;
        :hover {
          box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
          transition: box-shadow 0.2s ease-in-out;
        }
      }
    }
  }
`;

const HomeActivities: FC = () => {
  console.log('home-activities-render');

  return (
    <HomeActivitiesContainer>
      <div className='activities_heading'>
        <h1 className='activities_heading_title'>Our Class Activities</h1>
        <h2 className='activities_heading_description'>
          Day by day on the Indonesia Dirgantara Flight
        </h2>
      </div>

      <div className='activities_content'>
        <div className='activities_content_image'>
          {Array.from({ length: 9 }).map((_, i) => (
            <div className='activities_content_image_wrapper' key={i}>
              <img
                width={350}
                height={'100%'}
                src={`/img/activities/image${i}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
    </HomeActivitiesContainer>
  );
};

export default memo(HomeActivities);
