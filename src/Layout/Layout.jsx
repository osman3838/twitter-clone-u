import { Outlet } from 'react-router-dom'
import Rightbar from './sidebar/RigthBar/Rightbar'
import Sidebar from './sidebar'
const Layout = () => {
  return (
    <div className='w-[1259px]  flex mx-auto min-h-screen max-h-screen  '>
        <Sidebar/>
        <div className='flex-1 flex gap-[30px]'> 
        <main className='flex-1 flex border-x'>
         <Outlet/>
         </main>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Layout