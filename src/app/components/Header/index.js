import Image from 'next/image';

import santa from '@/assets/images/santa.svg';
import store from '@/assets/images/store.svg';


export default function Header() {
  return(
    <div className="w-screen bg-pink flex flex-col items-center">
      <div className='w-4/5 py-24 flex flex-col items-center justify-center lg:flex-row lg:gap-32'>
        <div className='text-center lg:flex lg:flex-col lg:items-start lg:text-start lg:w-2/4'>
          <div className='flex items-center justify-center gap-3 mb-8'>
            <Image 
              src={santa}
              alt='Papai Noel'
            />
            <h3 className='text-lg'>Feliz Natal</h3>
          </div>
            <h1 className='text-4xl font-semibold mb-6'>Uma <span className='text-red'>plataforma de doação</span> para espalhar alegria</h1>
            <h3 className='text-lg mb-10'>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</h3>
            <button className='w-72 bg-red border-0 rounded-md py-4 text-white font-medium uppercase mb-16 md:mb-28 lg:mb-0'>Fazer uma doação</button>
        </div>
        <div className='lg:w-2/4'>
          <Image 
            src={store}
            alt='Store'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}