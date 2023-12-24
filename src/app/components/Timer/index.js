'use client'

import { useTimer } from 'react-timer-hook';

export function Timer({ expiryTimestamp }) {
  const {     
    seconds,
    minutes,
    hours,
    days
  } = useTimer({ expiryTimestamp }) 

  return(
    <div className='flex items-center gap-1 text-red font-semibold text-4xl sm:text-5xl'>
      <span>{days} D -</span>
      <span>{hours} H -</span>
      <span>{minutes} M -</span>
      <span>{seconds} S</span>
    </div>
  );
}