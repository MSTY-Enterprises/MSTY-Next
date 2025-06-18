import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import img from '@/assets/images/whatshapp.png'
function WhatsAppbutton() {
  return (
    <Link
    href="https://wa.me/919910741417?text=I'm%20interested%20in%20your%20services" 
    target="_blank"
    className=" whats whatsapp-float fixed  Z-[9999999] right-5 bottom-5 "
    style={{ opacity: 1 }}
  >
    <Image
      src={img}
      alt="WhatsApp"
      width={50} // Adjust as needed
      height={50}
      className="whatsapp-icon "
      
    />
  </Link>
  )
}

export default WhatsAppbutton