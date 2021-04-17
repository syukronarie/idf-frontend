import Image from "next/image";
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
    background-image: url('/img/map.jpg');
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
    id: '1',
    name: 'Whitney Houston',
    image: '/img/testimony/image1.jpg',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic asperiores expedita quae aliquam porro nobis! Quis cupiditate facilis deleniti!'
  },
  {
    id: '2',
    name: 'Mariah Carey',
    image: '/img/testimony/image2.jpg',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit at ea, quam eveniet alias explicabo sunt labore facilis fugit quae. Est nobis quidem fugiat!'
  },
  {
    id: '3',
    name: 'Richard Marx',
    image: '/img/testimony/image3.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione ut quisquam amet itaque ipsam rem assumenda? Sunt minima illo totam ut aliquid tenetur non amet recusandae. Illum, laborum nulla.'
  },
  {
    id: '4',
    name: 'Celine Dion',
    image: '/img/testimony/image4.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et eligendi fuga voluptates sit laudantium asperiores maiores similique quibusdam distinctio enim tempora, iste dolorem aliquam dolores dolorum.'
  }
];

const TestimonySection: React.FC = () => {
  return (
    <TestimonyStyled>
      <div className='testimony_heading'>
        <h1 className='testimony_heading_title'>What Our Graduates Say</h1>
        <h2 className='testimony_heading_description'>
          With over 85% confirmed placement - hear how some of our <br />
          students are doing today in their new flight careers.
        </h2>
      </div>

      <div className='testimony_content'>
        {TestimonyData.map((testimony) => (
          <div className='testimony_content_square' key={testimony.id}>
            <div className='testimony_content_square_image'>
              <Image
                width={400}
                height={266}
                src={testimony.image}
                objectFit='cover'
              />
            </div>
            <div className='testimony_content_square_divider'>
              <h4 className='testimony_content_square_divider_text'>
                Testimony
              </h4>
            </div>
            <div className='testimony_content_square_text'>
              <h3 className='testimony_content_square_text_name'>
                {testimony.name}
              </h3>
              <p className='testimony_content_square_text_message'>
                {testimony.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TestimonyStyled>
  );
};

export default TestimonySection;
