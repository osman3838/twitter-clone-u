import React from 'react'
import Button from '~/components/Button/Button'
import SidebarSection from '~/components/sidebar-section'
import UserCard from '~/components/user-card'
import { whoFollowUsers } from '~/mocks/who-follow'
import { useAccount } from '~/store/hooks'
const WhoFollow = () => {
  const account = useAccount();
  return (
   <SidebarSection title="Kimi Takip Etmeli" more={`/connect_people?user_id=${account.id}`}> 
   {
    whoFollowUsers.map((user,index) =>
    {
      return(
        <>
      <UserCard user={user}/>
        </>
      )
    }
      )
   }
   </SidebarSection>
  )
}

export default WhoFollow