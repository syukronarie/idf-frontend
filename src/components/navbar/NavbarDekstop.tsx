import Link from "next/link";
import React from "react";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

/**
 * TODO: CREATING NAVBAR DEKSTOP
 * Including:
 * [ ] Logo Icon
 * [*] Menus
 * [ ] Search
 */

const menus = [
	{
		link: "/",
		name: "Beranda",
	},
	{
		link: "/profile",
		name: "Profile",
	},
	{
		link: "/register",
		name: "Pendaftaran Online",
	},
	{
		link: "/testimony",
		name: "Testimoni",
	},
	{
		link: "/contact",
		name: "Kontak kami",
	},
];

const NavStyled = styled.div`
	display: flex;
	align-items: center;
	background-color: ${COLORS.FUN_BLUE[500]};

	.dekstop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		margin: auto;
		${GLOBAL_SIZING_FONTS.TEXT_BASE};
		padding: 20px 0;
		background-color: ${COLORS.FUN_BLUE};
		color: ${COLORS.MYSTIC[500]};
	}
	.centerSide {
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

const NavbarDekstop = () => {
	return (
		<NavStyled>
			<nav className="dekstop">
				<div className="leftSide">
					<h1>Logo</h1>
				</div>
				<div className="centerSide">
					<ul>
						{menus.map((menu, i) => (
							<Link key={i} href={menu.link}>
								<li>{menu.name}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="rightSide">
					<h1>Search</h1>
				</div>
			</nav>
		</NavStyled>
	);
};

export default React.memo(NavbarDekstop);
