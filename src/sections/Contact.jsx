import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <p id='contacto' className='invisible '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor laudantium hic aliquid a suscipit! Vero mollitia enim quo magni! Beatae quod, quia doloremque temporibus, modi molestias laudantium eligendi laborum assumenda quidem nihil at et esse fugiat, tempore nulla maxime ad explicabo magni dolorum possimus! Aperiam itaque omnis recusandae? Molestias distinctio libero ea fugit. Officiis ut magni consectetur odio quisquam omnis accusantium nisi possimus recusandae. Ipsum laborum alias impedit quas minus recusandae voluptatum earum minima incidunt delectus hic, maxime, maiores doloribus necessitatibus! Cupiditate, consectetur similique voluptatum perferendis sapiente quod.</p>
      <div className="w-[95vw] md:w-[65vw] text-foreground mx-auto flex flex-col gap-6 items-center  justify-start font-sans ">
        <p  data-aos="fade-up-right" className="text-left text-4xl md:text-6xl font-main font-semibold ">
            Contact us
        </p>
        <p  data-aos="fade-up-left" className='text-foreground-200'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, error beatae. Officia, hic optio.
        </p>
        <div data-aos="zoom-in" className='w-full flex flex-col md:flex-row gap-4'>
            <ContactCard type={'phone'} first={'+52 622 123 4567'} second={'+52 644 456 1234'}/>
            <ContactCard type={'email'} first={'johndoe@email.com'} second={'joandoe@email.con'}/>
            <ContactCard type={'address'} first={'15 Spook Rock Rd Suffern North Dakota 10901 '}/>
        </div>
        <ContactForm />
      </div>
    </>
  )
}
