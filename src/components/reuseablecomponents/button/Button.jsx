import React from "react";

function Button(props) {
  const {
    variant,
    children,
    CustomDisplay,
    CustomFlexDirection,
    CustomJustifyContent,
    CustomAlignItems,
    CustomGap,
    CustomBorderRadius,
    CustomBackground,
    CustomFontFamily,
    CustomFontSize,
    CustomFontStyle,
    CustomFontWeight,
    CustomLineHeight,
    ...rest
  } = props;
  const customStyles = {
    display: CustomDisplay,
    flexDirection: CustomFlexDirection,
    justifyContent: CustomJustifyContent,
    alignItems: CustomAlignItems,
    gap: CustomGap,
    borderRadius: CustomBorderRadius,
    background: CustomBackground,
    fontFamily: CustomFontFamily,
    fontSize: CustomFontSize,
    fontStyle: CustomFontStyle,
    fontWeight: CustomFontWeight,
    lineHeight: CustomLineHeight,
  };

  return (
    <>
      <button className={`button ${variant}`} style={customStyles} {...rest}>
        {children}
      </button>
    </>
  );
}

export default Button;
