import classNames from "classnames"
import { func } from "prop-types"
import { Link, NavLink } from "react-router-dom"
import Button from "~/components/Button/Button"
import More from "~/components/More/More"
import New from "~/components/New/New"
import { useAccount } from "~/store/hooks"
import { mainMenu } from "~/utils/const"
const Menu = () => {
  const account = useAccount();
  return (
    <nav className='mt-0.5 mb-1 flex flex-col'>
    {
      mainMenu.map((item,key) => 
      {
        return(
          <>  
          <NavLink to={typeof item.path === "function" ? item.path(account.username) : item.path } className="w-full  block group">
          {
           ({isActive}) => 
             (
               <div className={classNames(" inline-flex relative  p-3  gap-x-3 text-xl group-hover: rounded-full",{
                 "font-bold":isActive
           })}>
            {
                item.notification && (
                  <span className="absolute left-7 text-sm bg-[#1d9bf0] flex justify-center items-center w-[18px] h-[18px] rounded-full -top-0.5">0</span>
                 )
            }
             {
           

             isActive ?              
     
     
          item.icon.active      : (
            item.icon.passive 
                         )} 
{
  item.title
}
               </div>
             )
          }
       </NavLink>
      


    
       </>
        )
      })
    }
       
    <New/>
    <div className="py-4">  
    <Button size={"large"}>
     Gönder
    </Button>
    </div>
    </nav>
  )
}

export default Menu