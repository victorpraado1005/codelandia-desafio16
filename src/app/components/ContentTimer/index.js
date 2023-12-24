import img2 from '@/assets/images/img2.svg';
import Image from 'next/image';
import { Timer } from '../Timer';

export function ContentTimer() {
  return(
    <div className=" w-screen flex flex-col items-center justify-center text-center py-20 gap-6">
      <div className="w-4/5 flex flex-col gap-6">
        <h1 className=" text-3xl font-semibold">Tempo limitado</h1>
        <h3>Nessas festas de fim de ano mande um presente para a pessoa amada e   compartilhe a alegria do Natal.</h3>
      </div>
      <Timer 
        expiryTimestamp={1703473200000}
      />
      <Image 
        src={img2}
        alt='Imagem 2'
      />
    </div>
  );
}