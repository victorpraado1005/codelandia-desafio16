import Image from 'next/image';

import santa from '@/assets/images/santa.svg';
import twitter from '@/assets/images/twitter.svg';
import wpp from '@/assets/images/wpp.svg';
import instagram from '@/assets/images/insta.svg';
import facebook from '@/assets/images/facebook.svg';
import google from '@/assets/images/google.svg';

export default function Footer() {
  return(
    <div className="w-screen bg-pink flex flex-col items-center lg:justify-between">
      <div className='w-4/5 flex flex-col items-center justify-center pt-12 pb-16 gap-8 lg:flex-row lg:py-4 lg:justify-around'>
        <div className='flex items-center justify-center gap-3 mb-8 lg:mb-0'>
          <Image 
            src={santa}
            alt='Papai Noel'
          />
          <h3 className='text-lg'>Feliz Natal</h3>
        </div>
        <div className='w-full flex justify-evenly items-center md:w-3/5 lg:w-1/5 lg:justify-between lg:gap-2'>
          <button className='w-10 h-10 bg-pinkDard rounded-full flex flex-col items-center justify-center'>
            <Image
              src={twitter}
              alt='button twitter'
            />
          </button>
          <button className='w-10 h-10 bg-pinkDard rounded-full flex flex-col items-center justify-center'>
            <Image
              src={wpp}
              alt='button twitter'
            />
          </button>
          <button className='w-10 h-10 bg-pinkDard rounded-full flex flex-col items-center justify-center'>
            <Image
              src={instagram}
              alt='button twitter'
            />
          </button>
          <button className='w-10 h-10 bg-pinkDard rounded-full flex flex-col items-center justify-center'>
            <Image
              src={facebook}
              alt='button twitter'
            />
          </button>
          <button className='w-10 h-10 bg-pinkDard rounded-full flex flex-col items-center justify-center'>
            <Image
              src={google}
              alt='button twitter'
            />
          </button>
        </div>
      </div>
    </div>
  );
}