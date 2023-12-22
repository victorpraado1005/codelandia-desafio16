import Image from 'next/image';

import santa from '@/assets/images/santa.svg';
import store from '@/assets/images/store.svg';

export function Header() {
  return(
    <div className="w-screen bg-pink h-4/5 flex flex-col items-center justify-center text-center py-24">
      <div className='flex items-center justify-center gap-3 mb-8'>
        <Image 
          src={santa}
          alt='Papai Noel'
        />
        <h3 className='text-lg'>Feliz Natal</h3>
      </div>
      <h1 className='w-72 text-4xl font-semibold mb-6'>Uma <span className='text-red'>plataforma de doação</span> para espalhar alegria</h1>
      <h3 className='w-80 text-lg mb-10'>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</h3>
      <button className='w-72 bg-red border-0 rounded-md py-4 text-white font-medium uppercase mb-16'>Fazer uma doação</button>
      <Image 
        src={store}
        alt='Store'
      />
    </div>
  );
}