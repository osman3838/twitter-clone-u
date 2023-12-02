import Search from "./Search"
import Premium from "~/components/premium"
import Topics from "~/components/topics"
import WhoFollow from "./WhoFollow"
import { useAccount } from "~/store/hooks"
import Footer from "./Footer"
const Rightbar = () => {
  const account = useAccount();
  return (
    <>
 
    <div className='w-[350px]'>

      <Search/>
      <Premium/>
      <Topics/>
      <WhoFollow/>
      <Footer/>
    </div>
    </>
  )
}

export default Rightbar