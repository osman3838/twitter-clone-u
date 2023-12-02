import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

const Button = ({ props,children, variant, size, onClick,className }) => {
  return createElement("button", {
    className: classNames(
      "rounded-full w-full inline-flex items-center justify-center font-bold",
      {
        "px-4 py-5 h-9 flex": size === "normal",
        "px-4 mr-4 text-[17px] w-full h-14 flex": size === "large",
        "px-4 h-8": size === "small",
        "bg-[#1d9bf0] hover:bg-[#eff3f41a]": variant === "primary",
        "bg-white text-[15px] px-4 whitespace-nowrap border  hover:!border-[#67070f] hover:text-[#f4212e] hover:bg-[#f4212e1a] text-black": variant === "white",
        "border border-white text-[15px]  px-4    whitespace-nowrap": variant === "white-outline",
      [className]:true,

      },
    ),
   onClick:onClick
  }, children);
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
  props:PropTypes.object,
  className:PropTypes.string

};

Button.defaultProps = {
  size: "normal",
  variant: "primary"
};

export default Button;
