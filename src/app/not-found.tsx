import { IMAGES } from '@/assets';
import Container from '@/Components/Reusable/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';

const NotFound = () => {
  return (
    <div className='relative w-full h-full font-Poppins flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={IMAGES.bgImage404}
        alt='Amplogix'
        className='absolute top-0 bottom-0 w-screen h-screen object-cover overflow-x-hidden'
      />

      {/* Content Container */}
      <Container>
        <div className='relative z-10 flex flex-col items-center text-center text-white'>
          
          {/* 404 Images */}
          <div className="flex items-center gap-3 mt-6">
            <Image src={IMAGES.four} alt='404' className='w-32 h-36' />
            <Image src={IMAGES.gif404} alt='404 Animation' className='size-[330px]' />
            <Image src={IMAGES.four} alt='404' className='w-32 h-36' />
          </div>

          <h1 className='text-4xl font-bold text-[#D6D6F2]'>
          Well, this is awkward...
            {/* OPPPPPS... You’re Losted, <br /> Go Home Before Someone Notices! */}
          </h1>
          <p className="text-[#D6D6F2] mt-3">The page eloped. Wanna head Home instead?</p>
          
          <Link
            href="/"
            className="mt-8 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-[10px] text-white font-medium flex items-center gap-3"
          >
            <GoHomeFill /> Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
