'use client';
import { useEffect } from 'react';

export default function Error({error, reset}:{error: Error, reset: () => void}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <h2>Something went wrong!</h2>
      <h5 className='btn btn-primary' onClick={() => reset()}>Try again</h5>
    </section>
  );
  
}
