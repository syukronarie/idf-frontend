import React, { Component, MouseEventHandler, ReactNode } from "react";

import { BtnStyled } from "./ButtonStyled";

type PropsComponents = {
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  border?: string;
  backgroundColorOne?: string;
  backgroundColorTwo?: string;
  children: ReactNode;
  component?: Component;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<PropsComponents> = ({
  fontSize,
  width,
  height,
  color,
  border,
  backgroundColorOne,
  backgroundColorTwo,
  children,
  component,
  style,
  onClick
}) => {
  return (
    <BtnStyled
      style={style}
      fontSize={fontSize}
      color={color}
      width={width}
      height={height}
      border={border}
      backgroundColorOne={backgroundColorOne}
      backgroundColorTwo={backgroundColorTwo}>
      {component}
      <button style={{}} onClick={onClick}>
        {children}
      </button>
    </BtnStyled>
  );
};

export default React.memo(Button);
