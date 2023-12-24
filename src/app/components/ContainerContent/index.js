import img3 from '@/assets/images/img3.svg';
import Image from 'next/image';

export default function ContainerContent() {
  return(
    <div className="w-full flex flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-32">
      <div className='flex items-center justify-center mb-12 lg:mb-0'>
        <Image 
          src={img3}
          alt='Imagem 3'
          className='w-4/5'
        />
      </div>
      <div className='flex flex-col items-center w-3/5 lg:w-2/5 lg:items-start'>
        <h1 className='font-semibold text-3xl xs:text-4xl text-center mb-6 lg:text-start'>Conectando generosidade ao redor do mundos</h1>
        <span className='text-center mb-10 lg:text-start'>Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</span>
        <button className='w-72 bg-red border-0 rounded-md py-4 text-white font-medium uppercase mb-16 md:mb-28 lg:mb-0'>Fazer uma doação</button>
      </div>
    </div>
  );
}