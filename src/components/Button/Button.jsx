import classNames from "classnames"
import { createElement } from "react"
import PropTypes from "prop-types";
const Button = ({children,size}) => {
  return createElement("button",{
    className:classNames("bg-[#1d9bf0] rounded-full w-full inline-flex items-center justify-center font-bold hover:bg-[#eff3f41a] ",{
        "px-4  py-5 h-9 flex ": size === "normal",
        "px-4 mr-4 text-[17px] w-full  h-14  flex ": size === "large"

    })
  },children)
}


Button.prototype =
{
size:PropTypes.oneOf(["normal","large"])
}

Button.defaultProps = {
    size:"normal"
}
export default Button