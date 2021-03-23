import { Component, ReactNode } from "react";
import styled from "styled-components";

import COLORS from "@styles/globalColors";
import GLOBAL_FLEX from "@styles/globalFlex";
import GLOBAL_SIZING_FONTS from "@styles/globalSizingFonts";

type PropsComponents = {
	color?: string;
	backgroundColor?: string;
	children: ReactNode;
	component?: Component;
};

type PropsStyled = {
	color?: string;
	backgroundColor?: string;
};

const Button: React.FC<PropsComponents> = ({
	color,
	backgroundColor,
	children,
	component,
}) => {
	return (
		<BtnStyled color={color} backgroundColor={backgroundColor}>
			{component}
			<button>{children}</button>
		</BtnStyled>
	);
};

const BtnStyled = styled.div<PropsStyled>`
	button {
		${GLOBAL_FLEX.CENTER}
		${GLOBAL_SIZING_FONTS.TEXT_BASE};
		text-transform: uppercase;
		font-weight: 700;
		/* color: ${(props) => (props.color ? props.color : COLORS.MYSTIC[500])};
		background-color: ${(props) =>
			props.backgroundColor
				? props.backgroundColor
				: COLORS.MOUNTAIN_MEADOW[500]}; */
		border-radius: 30px;
		margin-right: 20px;
		padding: 15px 20px;
		transition: 0.3s ease-in-out;

		:hover {
			transition: 0.3s ease-in-out;
			background-color: ${COLORS.MOUNTAIN_MEADOW[600]};
		}
	}
`;

export default Button;
