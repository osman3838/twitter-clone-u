import React from 'react'
import { topics } from '~/utils/const'
import Topic from './topic'
import { Link } from 'react-router-dom'
import SidebarSection from '../sidebar-section'
import Button from '../Button/Button'
const Topics = () => {
  return (
    <>  
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
{
    topics.map((topic,index) =>  
    { 
       return  <Topic key={index} item={topic}/>
    })
}

</SidebarSection>
    </>
  )
}

export default Topics