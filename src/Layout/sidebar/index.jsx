import Account from "./Account"
import Logo from "./Logo"
import Menu from "./Menu"

const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen max-h-screen   mx-4  flex flex-col ">
        <Logo/>
        <Menu/>
        <Account/>
    </aside>
  )
}

export default Sidebar