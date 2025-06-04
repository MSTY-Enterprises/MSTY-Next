import React from 'react'

import Uibnr from './_section/Uibnr'
import Deliver from './_section/Deliver'
import Logo from '@/app/_section/Logo'
import Goals from './_section/Goals'
import UiServices from './_section/UiServices'
import Process from './_section/Process'
import Contact from '@/app/_section/Contact'

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
