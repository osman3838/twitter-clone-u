import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import Sidebar from "~/Layout/sidebar";
Link
const SidebarSection = ({title,children,more  }) => {
  return (
   <section  className=" mt-5 rounded-xl bg-[#1D1F23]">

 <h5 className='h-12 text-xl  px-4   font-extrabold  leading-6 flex items-center'>  {title} </h5>
 <div className="grid">

{children}
</div> 
{ more && (<Link to={more} className='h-[52px] flex items-center px-4 text-[15px]  hover:bg-[#1d9bf01a]' >
Daha fazla göster 
</Link>) 
}

   </section>
  )
}

SidebarSection.prototype = {
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
    more:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}
SidebarSection.defaultProps =  {
    more:false
}
export default SidebarSection