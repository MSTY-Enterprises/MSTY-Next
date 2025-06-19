
import React from 'react'
import { data } from '@/store/Projectdata';

import Image from 'next/image';

export const metadata = {
  title: "Project | Web & Digital Marketing Solution for Grow ",
  description: "MSTY Enterprises provides professional web solutions, social media management, website maintenance, and digital marketing to help businesses expand online. ",
};
const page = ({params}) => {
 
  const { project } = params

  const decodedProject = project.replace(/%20/g, ' ')

  const projectData = data.find(item => item.name === decodedProject);

  return (
   <div>
      <Image src={projectData.link} alt={projectData.name} className='w-full h-full' />
    </div>
  )
}

export default page
