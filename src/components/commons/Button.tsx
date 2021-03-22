import { ReactNode } from "react";
import styled from "styled-components";

import Colors from "@styles/globalColors";
import Sizing from "@styles/globalSizing";

type PropsComponents = {
	color?: string;
	backgroundColor?: string;
	children: ReactNode;
};

type PropsStyled = {
	color?: string;
	backgroundColor?: string;
};

const Button: React.FC<PropsComponents> = ({
	color,
	backgroundColor,
	children,
}) => {
	return (
		<BtnStyled color={color} backgroundColor={backgroundColor}>
			<button>{children}</button>
		</BtnStyled>
	);
};

const BtnStyled = styled.div<PropsStyled>`
	display: inline-block;

	button {
		font-size: ${Sizing.md};
		color: ${(props) => (props.color ? props.color : Colors.MYSTIC[500])};
		background-color: ${(props) =>
			props.backgroundColor
				? props.backgroundColor
				: Colors.MOUNTAIN_MEADOW[500]};
		padding: ${Sizing.md};
		border-radius: 30px;
		transition: 0.3s ease-in-out;

		:hover {
			transition: 0.3s ease-in-out;
			background-color: ${Colors.MOUNTAIN_MEADOW[600]};
		}
	}
`;

export default Button;
