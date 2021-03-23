import IconRegister from "src/assets/svg/IconRegister";
import IconWhatsapp from "src/assets/svg/IconWhatsapp";
import styled from "styled-components";

import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

import Button from "../commons/Button";

const HeaderStyled = styled.div`
	${GLOBAL_FLEX.START};
	flex-direction: column;
	height: 20rem;
	max-width: 80%;
	margin: auto;

	.heading {
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
			${GLOBAL_FLEX.CENTER};
		}
	}
`;

const Whatsapp = styled(IconWhatsapp)`
	height: 2rem;
	width: 2rem;
	margin-right: 0.5rem;
`;

const Register = styled(IconRegister)`
	height: 2rem;
	width: 1.8rem;
	margin-right: 0.65rem;
	margin-left: 0.4rem;
`;

const HomeHeader: React.FC = () => {
	return (
		<HeaderStyled>
			<div className="heading">
				<h1 className="heading_title">Indonesia Dirgantara Flight</h1>
				<h2 className="heading_description">
					Lembaga Pendidikan Pramugari/Pramugara
				</h2>
				{/* <ul>
					<li>Jurusan:</li>
					<li>🛫 Staf Airlines</li>
					<li>🛫 Flight Attendant</li>
					<li>🛫 Marshalling & GSE</li>
					<li>🛫 Avsec</li>
				</ul> */}
			</div>

			<div className="btn-group">
				<div className="_item">
					<Button>
						<Whatsapp />
						Hubungi Kami
					</Button>
				</div>
				<div className="_item">
					<Button>
						<Register />
						Daftar Sekarang
					</Button>
				</div>
			</div>
		</HeaderStyled>
	);
};

export default HomeHeader;
