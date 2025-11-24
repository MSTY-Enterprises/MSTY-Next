import FallingText from '@/app/_section/Fallingtext'
import React from 'react'


function Fallingcard() {
  return (
    <>
      <div className="flex items-center justify-center p-6 ">
        <FallingText
          text="Creative Visions UI/UX Digital Marketing Website Design Business Solution Content Writing"
          highlightWords={["Creative Visions", "UI/UX", "Digital Marketing", "Website Design", "Business Solution", "Content Writing"]}
          trigger="scroll"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.5}
          fontSize="3.75rem "
          fontWeight={800}
          mouseConstraintStiffness={0.9}
        />

      </div>
    </>

  )
}

export default Fallingcard