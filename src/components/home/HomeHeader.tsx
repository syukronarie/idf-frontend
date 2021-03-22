import styled from "styled-components";

import SizingFonts from "@styles/globalFonts";

import Button from "../commons/Button";

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
					<Button>Hubungi Kami</Button>
				</div>
				<div className="_item">
					<Button>Daftar Sekarang</Button>
				</div>
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	@include FontSizing();

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 1200px;
	margin: auto;

	.heading {
		&_title {
			font-size: ${SizingFonts.xl3};
		}

		&_description {
			font-size: ${SizingFonts.xl};
		}
	}

	.btn-group {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row;

		._item {
			text-align: left;
			color: black;
		}
	}
`;

export default HomeHeader;
