import Link from "next/link";
import Colors from "src/styles/globalColors";
import Font from "src/styles/globalFonts";
import Sizing from "src/styles/globalSizing";
import styled from "styled-components";

/**
 * TODO: CREATING NAVBAR DEKSTOP
 * Including:
 * [ ] Logo Icon
 * [ ] Menus
 * [ ] Search
 */

const Styled = styled.div`
	background-color: ${Colors.AQUA_HAZE};

	.dekstop {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: ${Font.sm};
		padding: ${Sizing.lg};
		background-color: ${Colors.FUN_BLUE};
		color: ${Colors.AQUA_HAZE};
	}

	.centerSide {
		font-size: ${Font.sm};

		ul {
			display: flex;
			flex-direction: row;
		}

		li {
			padding: 0 10px;
			cursor: pointer;
		}
	}
`;

const NavbarDekstop: React.FC = () => {
	return (
		<Styled>
			<nav className="dekstop">
				<div className="leftSide">
					<h1>Logo</h1>
				</div>
				<div className="centerSide">
					<ul>
						<Link href="/profile">
							<li>Profile</li>
						</Link>
						<Link href="/register">
							<li>Pendaftaran Online</li>
						</Link>
						<Link href="/career">
							<li>Info Loker</li>
						</Link>
						<Link href="/testimoni">
							<li>Testimoni</li>
						</Link>

						<Link href="/about-us">
							<li>Kontak kami</li>
						</Link>
					</ul>
				</div>
				<div className="rightSide">
					<h1>Search</h1>
				</div>
			</nav>
		</Styled>
	);
};

export default NavbarDekstop;
