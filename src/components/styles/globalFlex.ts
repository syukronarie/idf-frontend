import { css } from "styled-components";

const GLOBAL_FLEX = {
	CENTER: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	START: css`
		display: flex;
		justify-content: center;
		align-items: flex-start;
	`,
	END: css`
		display: flex;
		justify-content: center;
		align-items: flex-end;
	`,
};

export default GLOBAL_FLEX;
