import React from 'react'
import { data } from '@/store/Dashboarddata';
import Image from 'next/image';

export const metadata = {
  title: "Project | Web & Digital Marketing Solution for Grow ",
  description: "MSTY Enterprises provides professional web solutions, social media management, website maintenance, and digital marketing to help businesses expand online.",
};

const Page = async ({ params }) => {
  const { project } = await params;

  const decodedDashboard = decodeURIComponent(project);

  const Dashboarddata = data.find(item => item.name === decodedDashboard);

  if (!Dashboarddata) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Image src={Dashboarddata.link} alt={Dashboarddata.name} className="w-full h-full" width={800} height={600} />
    </div>
  );
};

export default Page;
