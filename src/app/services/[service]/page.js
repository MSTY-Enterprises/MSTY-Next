import React from 'react'

import Uibnr from './_section/Uibnr'
import Deliver from './_section/Deliver'
import Logo from '@/app/_section/Logo'
import Goals from './_section/Goals'
import UiServices from './_section/UiServices'
import Process from './_section/Process'
import Contact from '@/app/_section/Contact'

export function generateMetadata({ params }) {
  const { service } = params;
  const capitalizeFirstLetter = (str) => {
    return str.split('%20').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  let services = capitalizeFirstLetter(service);

  return {
    title: services + ' | Web & Digital Marketing Solution for Grow ',
    description: `Explore our ${services} services and discover the best features we offer.`,
  };
}


const page = () => {
  return (
    <>
    <Uibnr />
    <Logo />
    <Goals />
    <Deliver />
    <UiServices />
    <Process />
    <Contact />
    </>
  )
}

export default page
