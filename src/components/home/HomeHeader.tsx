import Image from "next/image";
import IconPlane from "src/assets/svg/IconPlane";
import IconWhatsapp from "src/assets/svg/IconWhatsapp";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

import Button from "../commons/Button";

const HeaderStyled = styled.div`
	.heading {
		${GLOBAL_FLEX.START};
		flex-direction: column;

		&_image {
			position: relative;
			top: -14rem;
			width: 100%;
			height: 120vh;
			z-index: -1;
			object-fit: cover;

			div {
				height: 80%;
			}

			img {
				top: 28rem !important;
			}

			@media screen and (min-width: 1280px) {
				top: -14rem;
			}
		}

		&_content {
			position: absolute;
			top: 0;
			width: 100%;
			margin: auto;

			&_wrapper {
				${GLOBAL_FLEX.START};
				flex-flow: column;
				padding-left: 10%;
				padding-top: 13%;
				color: ${COLORS.MYSTIC[200]};
			}
		}

		&_title {
			margin-top: 6rem;
			font-weight: 500;
			${GLOBAL_SIZING_FONTS.TEXT_5XL};
		}

		&_description {
			font-weight: 500;
			${GLOBAL_SIZING_FONTS.TEXT_5XL}
		}
	}

	.btn-group {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row;
		margin: 2rem 0;

		._item {
			padding-right: 20px;
			${GLOBAL_FLEX.CENTER};
		}
	}
`;

const Whatsapp = styled(IconWhatsapp)`
	height: 1.5rem;
	width: 2rem;
	margin-right: 0.5rem;
`;

const Plane = styled(IconPlane)`
	font-size: 1.5rem;
	margin-right: 1rem;
`;

const HomeHeader: React.FC = () => {
	return (
		<HeaderStyled>
			<div className="heading">
				<div className="heading_image">
					<Image
						src="/img/plane_01.jpg"
						layout="responsive"
						width={"1440"}
						height={"1060"}
						objectFit="cover"
						sizes="100vw"
					/>
				</div>
				<div className="heading_content">
					<div className="heading_content_wrapper">
						<h1 className="heading_title">Indonesia Dirgantara Flight</h1>
						<h2 className="heading_description">
							Lembaga Pendidikan Pramugari/Pramugara
						</h2>
						<div className="btn-group">
							<div className="_item">
								<Button
									width="13rem"
									height="4rem"
									// fontSize={`${GLOBAL_SIZING_FONTS.}`}
								>
									<Plane />
									Daftar Sekarang
								</Button>
							</div>
							<div className="_item">
								<Button
									width="13rem"
									height="4rem"
									border={`1px solid ${COLORS.MYSTIC[200]}`}
									backgroundColor={"#fdfdfe59"}
									color={`${COLORS.MYSTIC[300]}`}>
									<Whatsapp />
									Hubungi Kami
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeaderStyled>
	);
};

export default HomeHeader;
